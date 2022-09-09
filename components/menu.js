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
    label: "Operations & Extension Services",
    icon: "uil-list-ul",
    link: "/",
    subItems: [
      {
        id: 61,
        label: "Soil Test",
        link: "/"
      },
      {
        id: 62,
        label: "Training ",
        link: "/"
      }, {
        id: 63,
        label: "Internal inspections",
        link: "/"
      },
    ]
  },
  {
    id: 7,
    label: "Purchase & Sales",
    icon: "uil-list-ul",
    link: "/",
    subItems: [
      {
        id: 71,
        label: "Farmer wise purchase",
        link: "/"
      },
      {
        id: 71,
        label: "Farmer wise purchase",
        link: "/"
      },
      {
        id: 72,
        label: "Port transactions",
        link: "/"
      },
    ]
  },
  {
    id: 8,
    label: "Monitoring & Evaluation",
    icon: "uil-list-ul",
    link: "/",
    subItems: [
      {
        id: 81,
        label: "Farmer wise premium listing",
        link: "/"
      },
      {
        id: 81,
        label: "Surveys ",
        link: "/"
      },
      {
        id: 82,
        label: "Training module",
        link: "/"
      },
    ]
  },
  {
    id: 9,
    label: "Child labour monitoring",
    icon: "uil-list-ul",
    link: "/",
    subItems: [
      {
        id: 91,
        label: "Case management",
        link: "/"
      },
      {
        id: 91,
        label: "Trace to community ",
        link: "/"
      },
      {
        id: 92,
        label: "Training module",
        link: "/"
      },
    ]
  },
  {
    id: 10,
    label: "Accounting",
    icon: "uil-list-ul",
    link: "/",
    subItems: [
      {
        id: 101,
        label: "Cash & bank transactions",
        link: "/"
      },
      {
        id: 101,
        label: "Post-dated transactions",
        link: "/"
      },
      {
        id: 102,
        label: "Purchase bills",
        link: "/"
      },
      {
        id: 103,
        label: "Sales bills",
        link: "/"
      },
      {
        id: 104,
        label: "Bank reconciliation",
        link: "/"
      },
      {
        id: 105,
        label: "Ledger reports",
        link: "/"
      },
      {
        id: 106,
        label: "Trial balance",
        link: "/"
      },
      {
        id: 107,
        label: "Cash flow statement",
        link: "/"
      },
      {
        id: 108,
        label: "P/L statement",
        link: "/"
      },
    ]
  },
  {
    id: 11,
    label: "Accounting",
    icon: "uil-list-ul",
    link: "/",
    subItems: [
      {
        id: 101,
        label: "Cash & bank transactions",
        link: "/"
      },
      {
        id: 101,
        label: "Post-dated transactions",
        link: "/"
      },
      {
        id: 102,
        label: "Purchase bills",
        link: "/"
      },
      {
        id: 103,
        label: "Sales bills",
        link: "/"
      },
      {
        id: 104,
        label: "Bank reconciliation",
        link: "/"
      },
      {
        id: 105,
        label: "Ledger reports",
        link: "/"
      },
      {
        id: 106,
        label: "Trial balance",
        link: "/"
      },
      {
        id: 107,
        label: "Cash flow statement",
        link: "/"
      },
      {
        id: 108,
        label: "P/L statement",
        link: "/"
      },
    ]
  },

];

