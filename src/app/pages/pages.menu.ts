export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'dashboard',
        data: {
          menu: {
            title: 'Dashboard',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0,
          },
        },
      },

       {
        path: 'request-report',
        data: {
          menu: {
            title: 'Request/Report Item',
            icon: 'ion-gear-a',
            selected: false,
            expanded: false,
            order: 250,
          },
        },
        children: [
          {
            path: 'reportItem',
            data: {
              menu: {
                title: 'Report Item',
              },
            },
          },
          {
            path: 'requestExistingItem',
            data: {
              menu: {
                title: 'Request Existing Item',
              },
            },
          },
          {
            path: 'requestNewItem',
            data: {
              menu: {
                title: 'Request New Item',
              },
            },
          },
        ],
      },
      {
        path: 'forms',
        data: {
          menu: {
            title: 'Insert Items',
            icon: 'ion-compose',
            selected: false,
            expanded: false,
            order: 400,
          },
        },
        children: [
          {
            path: 'shortTermItemInsert',
            data: {
              menu: {
                title: 'Short Term Item Insert',
              },
            },
          },
          {
            path: 'middleTermItemInsert',
            data: {
              menu: {
                title: 'Middle Term Item Insert',
              },
            },
          },
          {
            path: 'longTermItemInsert',
            data: {
              menu: {
                title: 'Long Term Item Insert',
              },
            },
          },

        ],
      },


      {
        path: 'item-allocation',
        data: {
          menu: {
            title: 'Item Allocation',
            icon: 'ion-gear-a',
            selected: false,
            expanded: false,
            order: 250,
          },
        },
        children: [
          {
            path: 'allocation',
            data: {
              menu: {
                title: 'Allocate Item',
              },
            },
          },
          {
            path: 'availability',
            data: {
              menu: {
                title: 'Available Items',
              },
            },
          },
          {
            path: 'itemtype',
            data: {
              menu: {
                title: 'Add New Item Types',
              },
            },
          },
        ],
      },

       {
        path: 'item-allocation',
        data: {
          menu: {
            title: 'Item Allocation',
            icon: 'ion-gear-a',
            selected: false,
            expanded: false,
            order: 250,
          },
        },
        children: [
          {
            path: 'allocation',
            data: {
              menu: {
                title: 'Allocate Item',
              },
            },
          },
          {
            path: 'availability',
            data: {
              menu: {
                title: 'Available Items',
              },
            },
          },
          {
            path: 'itemtype',
            data: {
              menu: {
                title: 'Add New Item Types',
              },
            },
          },
        ],
      },

      {
        path: 'forms',
        data: {
          menu: {
            title: 'Authorization',
            icon: 'ion-compose',
            selected: false,
            expanded: false,
            order: 400,
          },
        },
        children: [
          {
            path: 'setRole',
            data: {
              menu: {
                title: 'Set UserRole',
              },
            },
          },

        ],
      },

      //extra

      {
        path: '',
        data: {
          menu: {
            title: 'general.menu.pages',
            icon: 'ion-document',
            selected: false,
            expanded: false,
            order: 650,
          },
        },
        children: [
          {
            path: ['/login'],
            data: {
              menu: {
                title: 'general.menu.login',
              },
            },
          },
          {
            path: ['/register'],
            data: {
              menu: {
                title: 'general.menu.register',
              },
            },
          },
          {
            path: ['/profile'],
            data: {
              menu: {
                title: 'My Profile',
              },
            },
          },
        ],
      },
    ],
  },
];
