export const countryOptions = [
  { label: "India", value: "India" },
  { label: "USA", value: "USA" },
];

export const stateOptions: Record<string, { label: string; value: string }[]> =
  {
    India: [
      { label: "Delhi", value: "Delhi" },
      { label: "Maharashtra", value: "Maharashtra" },
      { label: "Manipur", value: "Manipur" },
    ],
    USA: [
      { label: "California", value: "California" },
      { label: "Texas", value: "Texas" },
    ],
  };

export const cityOptions: Record<string, { label: string; value: string }[]> = {
  Delhi: [
    { label: "New Delhi", value: "New Delhi" },
    { label: "South Delhi", value: "South Delhi" },
  ],
  Maharashtra: [
    { label: "Mumbai", value: "Mumbai" },
    { label: "Pune", value: "Pune" },
  ],
  California: [
    { label: "Los Angeles", value: "Los Angeles" },
    { label: "San Francisco", value: "San Francisco" },
  ],
  Manipur: [
    { label: "Imphal East", value: "Imphal East" },
    { label: "Imphal West", value: "Imphal West" },
  ],
  Texas: [
    { label: "Houston", value: "Houston" },
    { label: "Austin", value: "Austin" },
  ],
};

export const countryCodeOptions = [
  { label: "India +91", value: "+91" },
  { label: "USA +1", value: "+1" },
];
