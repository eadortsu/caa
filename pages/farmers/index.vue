<script>
/**
 * User list component
 */
export default {
  head() {
    return {
      title: `${this.title} |  Cocoa Abrabopa Association`,
    };
  },
  data() {
    return {
      title: "Farmer List",
      items: [{
        text: "Farmers",
      },
        {
          text: "List",
          active: true,
        },
      ],
      userList: [
        {
          id: 1,
          profile: require("~/assets/images/users/avatar-2.jpg"),
          name: "Simon Ryles",
          address: "Assin Fosu",
          phone: "024 123 4567",
          group: "Group 1",
          gps: "AS-16-1234",
          contract: "Valid",
        },
        {
          id: 2,
          profile: require("~/assets/images/users/avatar-3.jpg"),
          name: "Ama Doe",
          address: "Cape Cost",
          phone: "024 353 7290",
          group: "Group 2",
          gps: "CC-16-1234",
          contract: "Invalid",
        },
        {
          id: 3,
          name: "Frederick White",
          address: "Assin Fosu",
          phone: "024 123 4567",
          group: "Group 1",
          gps: "AS-16-1234",
          contract: "Valid",
        },
        {
          id: 4,
          profile: require("~/assets/images/users/avatar-4.jpg"),
          name: "Shanon Marvin",
          address: "Cape Cost",
          phone: "024 353 7290",
          group: "Group 2",
          gps: "CC-16-1234",
          contract: "Invalid",
        },
        {
          id: 5,
          name: "Mark Jones",
          address: "Assin Fosu",
          phone: "024 123 4567",
          group: "Group 1",
          gps: "AS-16-1234",
          contract: "Valid",
        },
        {
          id: 6,
          profile: require("~/assets/images/users/avatar-7.jpg"),
          name: "Patrick Petty",
          address: "Cape Cost",
          phone: "024 353 7290",
          group: "Group 2",
          gps: "CC-16-1234",
          contract: "Invalid",
        },
        {
          id: 7,
          name: "Mark Jones",
          address: "Assin Fosu",
          phone: "024 123 4567",
          group: "Group 1",
          gps: "AS-16-1234",
          contract: "Valid",
        },
        {
          id: 8,
          profile: require("~/assets/images/users/avatar-7.jpg"),
          name: "Patrick Petty",
          address: "Cape Cost",
          phone: "024 353 7290",
          group: "Group 2",
          gps: "CC-16-1234",
          contract: "Invalid",
        },
        {
          id: 9,
          name: "Mark Jones",
          address: "Assin Fosu",
          phone: "024 123 4567",
          group: "Group 1",
          gps: "AS-16-1234",
          contract: "Valid",
        }
      ],
      totalRows: 1,
      currentPage: 1,
      perPage: 10,
      pageOptions: [10, 25, 50, 100],
      filter: null,
      filterOn: [],
      sortBy: "age",
      sortDesc: false,
      fields: [{
        key: "check",
        label: "",
      },
        {
          key: "name",
        },
        {
          key: "address",
        },
        {
          key: "phone",
        },
        {
          key: "group",
        },
        {
          key: "gps",
        },
        "action",
      ],
    };
  },
  computed: {
    /**
     * Total no. of records
     */
    rows() {
      return this.userList.length;
    },
  },
  mounted() {
    // Set the initial number of items
    this.totalRows = this.items.length;
  },
  methods: {
    /**
     * Search the table data with search input
     */
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
  },
  middleware: "authentication",
};
</script>

<template>
  <div>
    <PageHeader :title="title" :items="items"/>
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="row mt-4">
              <div class="col-sm-12 col-md-6">
                <div id="tickets-table_length" class="dataTables_length">
                  <label class="d-inline-flex align-items-center">
                    Show&nbsp;
                    <b-form-select v-model="perPage" size="sm" :options="pageOptions"></b-form-select>&nbsp;entries
                  </label>
                </div>
              </div>
              <!-- Search -->
              <div class="col-sm-12 col-md-6">
                <div id="tickets-table_filter" class="dataTables_filter text-md-end">
                  <label class="d-inline-flex align-items-center">
                    Search:
                    <b-form-input v-model="filter" type="search"
                                  class="form-control form-control-sm ms-2"></b-form-input>
                  </label>
                </div>
              </div>
              <!-- End search -->
            </div>
            <!-- Table -->
            <div class="table-responsive mb-0">
              <b-table class="table table-centered table-nowrap" :items="userList" :fields="fields" responsive="sm"
                       :per-page="perPage" :current-page="currentPage" :sort-by.sync="sortBy" :sort-desc.sync="sortDesc"
                       :filter="filter" :filter-included-fields="filterOn" @filtered="onFiltered">
                <template v-slot:cell(check)="data">
                  <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" :id="`contacusercheck${data.item.id}`"/>
                    <label class="custom-control-label" :for="`contacusercheck${data.item.id}`"></label>
                  </div>
                </template>
                <template v-slot:cell(name)="data">
                  <img v-if="data.item.profile" :src="data.item.profile" alt class="avatar-xs rounded-circle me-2"/>
                  <div v-if="!data.item.profile" class="avatar-xs d-inline-block me-2">
                    <div class="avatar-title bg-soft-primary rounded-circle text-primary">
                      <i class="mdi mdi-account-circle m-0"></i>
                    </div>
                  </div>
                  <a href="#" class="text-body">{{ data.item.name }}</a>
                </template>
                <template v-slot:cell(action)>
                  <ul class="list-inline mb-0">
                    <li class="list-inline-item">
                      <a href="javascript:void(0);" class="px-2 text-primary" v-b-tooltip.hover title="Edit">
                        <i class="uil uil-pen font-size-18"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="javascript:void(0);" class="px-2 text-danger" v-b-tooltip.hover title="Delete">
                        <i class="uil uil-trash-alt font-size-18"></i>
                      </a>
                    </li>
                    <b-dropdown class="list-inline-item" variant="white" right
                                toggle-class="text-muted font-size-18 px-2">
                      <template v-slot:button-content>
                        <i class="uil uil-ellipsis-v"></i>
                      </template>

                      <a class="dropdown-item" href="#">Action</a>
                      <a class="dropdown-item" href="#">Another action</a>
                      <a class="dropdown-item" href="#">Something else here</a>
                    </b-dropdown>
                  </ul>
                </template>
              </b-table>
            </div>
            <div class="row">
              <div class="col">
                <div class="dataTables_paginate paging_simple_numbers float-end">
                  <ul class="pagination pagination-rounded mb-0">
                    <!-- pagination -->
                    <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage"></b-pagination>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
