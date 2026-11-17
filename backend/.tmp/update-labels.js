const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, 'data.db');
const db = new sqlite3.Database(dbPath);

const key = 'plugin_content_manager_configuration_components::home.hero';

const fieldLabels = {
  headingPart1: 'Heading Part 1',
  headingHighlight: 'Heading Highlight',
  headingPart3: 'Heading Part 3',
  description: 'Description',
  primaryCtaLabel: 'Primary CTA Label',
  primaryCtaHref: 'Primary CTA URL',
  secondaryCtaLabel: 'Secondary CTA Label',
  secondaryCtaHref: 'Secondary CTA URL',
  creatorCount: 'Creator Count',
  earningsAmount: 'Earnings Amount',
  heroImage: 'Hero Image',
  avatars: 'Avatars'
};

db.get('SELECT value FROM strapi_core_store_settings WHERE key = ?', [key], (err, row) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  
  if (!row) {
    console.log('Record not found');
    process.exit(1);
  }
  
  try {
    const config = JSON.parse(row.value);
    
    Object.keys(fieldLabels).forEach(fieldKey => {
      if (config.metadatas && config.metadatas[fieldKey] && config.metadatas[fieldKey].edit) {
        config.metadatas[fieldKey].edit.label = fieldLabels[fieldKey];
      }
    });
    
    const updatedValue = JSON.stringify(config);
    
    db.run('UPDATE strapi_core_store_settings SET value = ? WHERE key = ?', [updatedValue, key], function(updateErr) {
      if (updateErr) {
        console.error(updateErr);
        process.exit(1);
      }
      console.log('Successfully updated labels in data.db');
      db.close();
    });
  } catch (parseErr) {
    console.error('Error parsing JSON:', parseErr);
    process.exit(1);
  }
});
