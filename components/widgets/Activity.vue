<script>
/**
 * Activity component
 */
export default {};
</script>

<template>
<div class="col-xl-5">
    <div class="card">
        <div class="card-body">
            <div class="float-end">
                <b-dropdown right toggle-class="p-0" variant="white">
                    <template v-slot:button-content>
                        <span class="text-muted">
                            Recent
                            <i class="mdi mdi-chevron-down ml-1"></i>
                        </span>
                    </template>
                    <a class="dropdown-item" href="#">Recent</a>
                    <a class="dropdown-item" href="#">By Users</a>
                </b-dropdown>
            </div>

            <h4 class="card-title mb-4">Pending Task</h4>

            <ol class="activity-feed mb-0 ps-2" data-simplebar style="max-height: 336px;">
                <li class="feed-item">
                    <div class="feed-item-list">
                        <p class="text-muted mb-1 font-size-13">
                            Today
                            <small class="d-inline-block ml-1">12:20 pm</small>
                        </p>
                        <p class="mt-0 mb-0">
                          Land ploughing -
                            <span class="text-primary">
                                 then add duration, and progress percentage
                            </span>
                        </p>
                    </div>
                </li>
                <li class="feed-item">
                    <p class="text-muted mb-1 font-size-13">
                        22 Jul, 2020
                        <small class="d-inline-block ml-1">12:36 pm</small>
                    </p>
                    <p class="mt-0 mb-0">
                      Spraying - do same for this as well
                        <span class="text-primary">Alex</span>
                    </p>
                </li>
                <li class="feed-item">
                    <p class="text-muted mb-1 font-size-13">
                        18 Jul, 2020
                        <small class="d-inline-block ml-1">07:56 am</small>
                    </p>
                    <p class="mt-0 mb-0">
                      Harvesting - same for this
                        <span class="text-primary">Ken </span>
                    </p>
                </li>
                <li class="feed-item">
                    <p class="text-muted mb-1 font-size-13">
                        10 Jul, 2020
                        <small class="d-inline-block ml-1">08:42 pm</small>
                    </p>
                    <p class="mt-0 mb-0">
                      Supply of fertilizer
                      <span class="text-primary">Supply Office</span>
                    </p>
                </li>

                <li class="feed-item">
                    <p class="text-muted mb-1 font-size-13">
                        23 Jun, 2020
                        <small class="d-inline-block ml-1">12:22 am</small>
                    </p>
                    <p class="mt-0 mb-0">
                      Akate Awareness Program
                        <span class="text-primary">M&E Department</span>
                    </p>
                </li>
            </ol>
        </div>
    </div>
</div>
</template>
