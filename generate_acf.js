const fs = require('fs');

const generateField = (key, label, name, type, extra = {}) => ({
  key, label, name, type, ...extra
});

const generateRepeater = (key, label, name, sub_fields) => ({
  key, label, name, type: 'repeater', layout: 'block', sub_fields
});

// Define layouts for Flexible Content
const layouts = [
  {
    key: "layout_hero",
    name: "hero_section",
    label: "Hero Section",
    display: "block",
    sub_fields: [
      generateField("field_hero_title", "Title", "title", "text"),
      generateField("field_hero_subtitle", "Subtitle", "subtitle", "text"),
      generateField("field_hero_desc", "Description", "description", "textarea"),
    ]
  },
  {
    key: "layout_challenges",
    name: "challenges_section",
    label: "Challenges Section",
    display: "block",
    sub_fields: [
      generateField("field_chal_sec_title", "Section Title", "section_title", "text"),
      generateField("field_chal_sec_desc", "Section Description", "section_description", "textarea"),
      generateRepeater("field_challenges_rep", "Challenges List", "challenges_list", [
        generateField("field_chal_num", "Number", "number", "text"),
        generateField("field_chal_title", "Title", "title", "text"),
        generateField("field_chal_desc", "Description", "description", "textarea")
      ])
    ]
  },
  {
    key: "layout_services",
    name: "services_section",
    label: "Services Section",
    display: "block",
    sub_fields: [
      generateField("field_serv_sec_title", "Section Title", "section_title", "text"),
      generateField("field_serv_sec_desc", "Section Description", "section_description", "textarea"),
      generateRepeater("field_services_rep", "Services List", "services_list", [
        generateField("field_serv_title", "Title", "title", "text"),
        generateField("field_serv_desc", "Description", "description", "textarea"),
        generateField("field_serv_icon", "Icon Name (lucide)", "icon", "text"),
        generateField("field_serv_cap", "Capabilities (one per line)", "capabilities", "textarea")
      ])
    ]
  },
  {
    key: "layout_service_cards",
    name: "service_cards_section",
    label: "Service Cards Section",
    display: "block",
    sub_fields: [
      generateRepeater("field_service_cards_rep", "Cards", "cards", [
        generateField("field_card_title", "Title", "title", "text"),
        generateField("field_card_sub", "Subtitle", "subtitle", "text"),
        generateField("field_card_img", "Image", "image", "image", { return_format: 'url' })
      ])
    ]
  },
  {
    key: "layout_process",
    name: "process_section",
    label: "Process Timeline",
    display: "block",
    sub_fields: [
      generateRepeater("field_process_rep", "Timeline Steps", "steps", [
        generateField("field_proc_num", "Number", "number", "text"),
        generateField("field_proc_title", "Title", "title", "text"),
        generateField("field_proc_desc", "Description", "description", "textarea")
      ])
    ]
  },
  {
    key: "layout_why_choose_us",
    name: "why_choose_us_section",
    label: "Why Choose Us",
    display: "block",
    sub_fields: [
      generateRepeater("field_why_rep", "Features", "features", [
        generateField("field_why_title", "Title", "title", "text"),
        generateField("field_why_desc", "Description", "description", "textarea")
      ])
    ]
  },
  {
    key: "layout_industries",
    name: "industries_section",
    label: "Industries",
    display: "block",
    sub_fields: [
      generateRepeater("field_ind_rep", "Industries List", "industries", [
        generateField("field_ind_title", "Title", "title", "text"),
        generateField("field_ind_insight", "Insight", "insight", "text"),
        generateField("field_ind_img", "Image", "image", "image", { return_format: 'url' })
      ])
    ]
  },
  {
    key: "layout_case_studies",
    name: "case_studies_section",
    label: "Case Studies",
    display: "block",
    sub_fields: [
      generateRepeater("field_cs_rep", "Case Studies List", "case_studies", [
        generateField("field_cs_client", "Client Name", "client", "text"),
        generateField("field_cs_industry", "Industry", "industry", "text"),
        generateField("field_cs_desc", "Description", "description", "textarea"),
        generateField("field_cs_stats", "Stats/Result", "stats", "text"),
        generateField("field_cs_img", "Image", "image", "image", { return_format: 'url' })
      ])
    ]
  },
  {
    key: "layout_testimonials",
    name: "testimonials_section",
    label: "Testimonials",
    display: "block",
    sub_fields: [
      generateRepeater("field_test_rep", "Testimonials List", "testimonials", [
        generateField("field_test_quote", "Quote", "quote", "textarea"),
        generateField("field_test_author", "Author Name", "author", "text"),
        generateField("field_test_role", "Author Role", "role", "text"),
        generateField("field_test_img", "Author Image", "image", "image", { return_format: 'url' })
      ])
    ]
  },
  {
    key: "layout_leadership",
    name: "leadership_section",
    label: "Leadership (Founders)",
    display: "block",
    sub_fields: [
      generateRepeater("field_lead_rep", "Founders List", "founders", [
        generateField("field_lead_name", "Name", "name", "text"),
        generateField("field_lead_title", "Title", "title", "text"),
        generateField("field_lead_img", "Image", "image", "image", { return_format: 'url' }),
        generateField("field_lead_bio", "Bio (paragraphs on new lines)", "bio", "textarea"),
        generateField("field_lead_certs", "Certifications (one per line)", "certifications", "textarea"),
        generateField("field_lead_specs", "Specialties (one per line)", "specialties", "textarea"),
        generateField("field_lead_pos", "Image Position", "image_position", "select", { choices: { left: "Left", right: "Right" } })
      ])
    ]
  },
  {
    key: "layout_faq",
    name: "faq_section",
    label: "FAQ Section",
    display: "block",
    sub_fields: [
      generateRepeater("field_faq_rep", "FAQs", "faqs", [
        generateField("field_faq_q", "Question", "question", "text"),
        generateField("field_faq_a", "Answer", "answer", "textarea")
      ])
    ]
  }
];

const acfExport = [
  {
    key: "group_page_builder",
    title: "Page Builder (Homepage)",
    fields: [
      {
        key: "field_page_builder_flex",
        label: "Page Sections",
        name: "page_sections",
        type: "flexible_content",
        layouts: layouts,
        button_label: "Add Section"
      }
    ],
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
    description: "Flexible content page builder."
  }
];

fs.writeFileSync('acf-export-full.json', JSON.stringify(acfExport, null, 2));
console.log('Successfully generated acf-export-full.json');
