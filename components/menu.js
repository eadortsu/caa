export const menuItems = [
  {
    id: 1,
    label: "menuitems.menu.text",
    isTitle: true
  },
  {
    id: 2,
    label: "menuitems.dashboard.text",
    icon: "uil-home-alt",
    badge: {
      variant: "info",
      text: "menuitems.dashboard.badge"
    },
    link: "/"
  },
  {
    id: 3,
    label: "Farmers",
    icon: "uil-users-alt",
    subItems: [
      {
        id: 31,
        label: "Farmer Listing",
        link: "/farmers",
        parentId: 3
      },
      {
        id: 31,
        label: "Farmer Groups",
        link: "/farmers/groups",
        parentId: 3
      },
      {
        id: 31,
        label: "Add Farmer",
        link: "/farmers/add",
        parentId: 3
      },
    ]
  },
  {
    id: 4,
    label: "Farm Input Sales",
    icon: "uil-download-alt",
    subItems: [
      {
        id: 41,
        label: "Contracts",
        link: "/sales/contracts",
        parentId: 4
      },
      {
        id: 42,
        label: "Issue Items",
        link: "/",
        parentId: 4
      },
      {
        id: 43,
        label: "Payments",
        link: "/sales/payments",
        parentId: 4
      },
      {
        id: 44,
        label: "Ledger Reports",
        link: "/",
        parentId: 4
      },
    ]
  },
  {
    id: 5,
    label: "Inventory Mng.",
    icon: "uil-database",
    subItems: [
      {
        id: 51,
        label: "Inventory",
        link: "/",
        parentId: 5
      },
      {
        id: 52,
        label: "Purchase Requests",
        link: "/",
        parentId: 5
      },
      {
        id: 53,
        label: "Purchase Returns",
        link: "/",
        parentId: 5
      },
      {
        id: 54,
        label: "Receive Materials",
        link: "/",
        parentId: 5
      },
      {
        id: 55,
        label: "Stock Reports",
        link: "/",
        parentId: 5
      },
    ]
  },
  {
    id: 6,
    label: "Tasks Tracking",
    icon: "uil-list-ul",
    link: "/"
  },
  {
    id: 7,
    label: "Soil Test",
    icon: "uil-flask",
    link: "/"
  },
];

