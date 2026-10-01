const fs = require('fs');

const generateField = (key, label, name, type, extra = {}) => ({
  key, label, name, type, ...extra
});

// Helper to generate multiple grouped fields (simulating a repeater for free ACF)
const generateStaticRepeater = (prefix, labelPrefix, count, subFields) => {
  const fields = [];
  for (let i = 1; i <= count; i++) {
    // Add a tab/message field to separate them visually in the WP admin
    fields.push(generateField(`tab_${prefix}_${i}`, `${labelPrefix} ${i}`, `tab_${prefix}_${i}`, "tab", { placement: "top" }));
    
    subFields.forEach(sf => {
      fields.push(generateField(
        `${sf.key}_${i}`, 
        sf.label, 
        `${sf.name}_${i}`, 
        sf.type, 
        sf.extra
      ));
    });
  }
  return fields;
};

const fields = [
  // HERO SECTION
  generateField("tab_hero", "Hero Section", "tab_hero", "tab"),
  generateField("hero_title", "Hero Title", "hero_title", "text"),
  generateField("hero_subtitle", "Hero Subtitle", "hero_subtitle", "text"),
  generateField("hero_description", "Hero Description", "hero_description", "textarea"),

  // FOUNDERS (2 Founders)
  generateField("tab_founders_main", "Founders", "tab_founders_main", "tab"),
  ...generateStaticRepeater("founder", "Founder", 2, [
    { key: "founder_name", label: "Name", name: "founder_name", type: "text" },
    { key: "founder_title", label: "Title", name: "founder_title", type: "text" },
    { key: "founder_image", label: "Image", name: "founder_image", type: "image", extra: { return_format: "url" } },
    { key: "founder_bio", label: "Bio", name: "founder_bio", type: "textarea" },
    { key: "founder_certs", label: "Certifications", name: "founder_certs", type: "textarea" },
    { key: "founder_specs", label: "Specialties", name: "founder_specs", type: "textarea" }
  ]),

  // CHALLENGES (4 Challenges)
  generateField("tab_challenges_main", "Challenges", "tab_challenges_main", "tab"),
  ...generateStaticRepeater("challenge", "Challenge", 4, [
    { key: "chal_title", label: "Title", name: "chal_title", type: "text" },
    { key: "chal_desc", label: "Description", name: "chal_desc", type: "textarea" }
  ]),

  // SERVICES (6 Services)
  generateField("tab_services_main", "Services", "tab_services_main", "tab"),
  ...generateStaticRepeater("service", "Service", 6, [
    { key: "serv_title", label: "Title", name: "serv_title", type: "text" },
    { key: "serv_desc", label: "Description", name: "serv_desc", type: "textarea" },
    { key: "serv_icon", label: "Icon Name", name: "serv_icon", type: "text" },
    { key: "serv_caps", label: "Capabilities", name: "serv_caps", type: "textarea" }
  ]),

  // SERVICE CARDS (8 Cards)
  generateField("tab_service_cards_main", "Service Cards", "tab_service_cards_main", "tab"),
  ...generateStaticRepeater("scard", "Card", 8, [
    { key: "scard_title", label: "Title", name: "scard_title", type: "text" },
    { key: "scard_sub", label: "Subtitle", name: "scard_sub", type: "text" },
    { key: "scard_image", label: "Image", name: "scard_image", type: "image", extra: { return_format: "url" } }
  ]),
];

const acfExport = [
  {
    key: "group_homepage_free",
    title: "Homepage Content (Free Version)",
    fields: fields,
    location: [
      [{ param: "post_type", operator: "==", value: "page" }]
    ],
    menu_order: 0,
    position: "normal",
    style: "default",
    label_placement: "top",
    instruction_placement: "label",
    hide_on_screen: "",
    active: true,
    description: "Homepage content fields compatible with free ACF."
  }
];

fs.writeFileSync('acf-export-free.json', JSON.stringify(acfExport, null, 2));
console.log('Successfully generated acf-export-free.json');
