<script>
/**
 * Top-users component
 */
export default {
    data() {
        return {
            users: [{
                    profile: require("~/assets/images/users/avatar-4.jpg"),
                    name: "Ama K. Adu",
                    location: "Accra",
                    status: "Cancel",
                    price: "GHS250.00",
                },
                {
                    profile: require("~/assets/images/users/avatar-5.jpg"),
                    name: "Kofi Sam",
                    location: "Takoradi",
                    status: "Success",
                    price: "GHS110.00",
                },
                {
                    profile: require("~/assets/images/users/avatar-6.jpg"),
                    name: "Robert Klikor",
                    location: "Cape Coast",
                    status: "Active",
                    price: "GHS420.00",
                },
                {
                    profile: require("~/assets/images/users/avatar-7.jpg"),
                    name: "Naa Koko Sam ",
                    location: "Asin Manso",
                    status: "Pending",
                    price: "GHS120.00",
                },
                {
                    profile: require("~/assets/images/users/avatar-8.jpg"),
                    name: "Fifi Henshaw",
                    location: "Asin Fosu",
                    status: "Active",
                    price: "GHS112.00",
                },
                {
                    profile: require("~/assets/images/users/avatar-2.jpg"),
                    name: "Eugene Dordor",
                    location: "Wenchi",
                    status: "Success",
                    price: "GHS120.00",
                },
                {
                    profile: require("~/assets/images/users/avatar-1.jpg"),
                    name: "Sonya Saay",
                    location: "Kumasi",
                    status: "Cancel",
                    price: "GHS112.00",
                },
            ],
        };
    },
};
</script>

<template>
<div class="col-xl-5">
    <div class="card">
        <div class="card-body">
            <div class="float-end">
                <b-dropdown variant="white" toggle-class="p-0">
                    <template v-slot:button-content>
                        <span class="text-muted">
                            All Members
                            <i class="mdi mdi-chevron-down ml-1"></i>
                        </span>
                    </template>
                    <a class="dropdown-item" href="#">Locations</a>
                    <a class="dropdown-item" href="#">Revenue</a>
                    <a class="dropdown-item" href="#">Join Date</a>
                </b-dropdown>
            </div>
            <h4 class="card-title mb-4">Top Farmers</h4>

            <div data-simplebar style="max-height: 336px;">
                <div class="table-responsive">
                    <table class="table table-borderless table-centered table-nowrap">
                        <tbody>
                            <tr v-for="(item, index) in users" :key="index">
                                <td style="width: 20px;">
                                    <img :src="item.profile" class="avatar-xs rounded-circle" alt="..." />
                                </td>
                                <td>
                                    <h6 class="font-size-15 mb-1 font-weight-normal">{{item.name}}</h6>
                                    <p class="text-muted font-size-13 mb-0">
                                        <i class="mdi mdi-map-marker"></i>
                                        {{item.location}}
                                    </p>
                                </td>
                                <td>
                                    <span class="badge font-size-12" :class="{'bg-soft-success': item.status === 'Success',
                      'bg-soft-danger': item.status === 'Cancel',
                      'bg-soft-info': item.status === 'Active',
                      'bg-soft-warning': item.status === 'Pending'}">{{item.status}}</span>
                                </td>
                                <td class="text-muted font-weight-semibold text-right">
                                    <i class="icon-xs icon mr-2 text-success" data-feather="trending-up"></i>
                                    {{item.price}}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <!-- enbd table-responsive-->
            </div>
            <!-- data-sidebar-->
        </div>
        <!-- end card-body-->
    </div>
    <!-- end card-->
</div>
<!-- end col -->
</template>
