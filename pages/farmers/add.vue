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
      title: "Add Farmer",
      items: [{
        text: "Farmers",
      },
        {
          text: "Add New",
          active: true,
        },
      ],
    };
  },
  mounted() {
  },
  methods: {},
  middleware: "authentication",
};
</script>

<template>
  <div>
    <PageHeader :title="title" :items="items"/>
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-body">

            <div class="row">
              <div class="col-lg-12">
                <div class="mt-4">
                  <h5 class="font-size-14 mb-4">
                    <i class="mdi mdi-arrow-right text-primary me-1"></i>
                    Farmer Details
                  </h5>
                  <form>
                    <b-form-group
                      label="Full name"
                      label-for="formrow-firstname-input"
                      class="mb-3"
                    >
                      <b-form-input
                        type="text"
                        id="formrow-firstname-input"
                      ></b-form-input>
                    </b-form-group>

                    <div class="row">
                      <div class="col-md-6">
                        <b-form-group
                          label="City"
                          label-for="formrow-email-input"
                          class="mb-3"
                        >
                          <select class="form-select">
                            <!-- list of cities in ghana                            -->
                            <option value="">Accra</option>
                            <option value="1">Kumasi</option>
                            <option value="2">Takoradi</option>
                            <option value="3">Cape Coast</option>
                            <option value="4">Sunyani</option>
                            <option value="5">Tamale</option>
                            <option value="6">Wa</option>
                            <option value="7">Koforidua</option>
                            <option value="8">Ho</option>
                            <option value="9">Tema</option>
                            <option value="10">Sekondi-Takoradi</option>
                            <option value="11">Bolgatanga</option>
                            <option value="12">Berekum</option>
                            <option value="13">Obuasi</option>
                            <option value="14">Swedru</option>
                            <option value="15">Techiman</option>
                            <option value="16">Kintampo</option>
                            <option value="17">Tarkwa</option>
                            <option value="18">Winneba</option>
                            <option value="19">Nkawkaw</option>
                            <option value="20">Nungua</option>
                            <option value="21">Bawku</option>
                            <option value="22">Akwatia</option>
                          </select>
                        </b-form-group>
                      </div>
                      <div class="col-md-6">
                        <b-form-group
                          label="Address"
                          label-for="formrow-email-input"
                          class="mb-3"
                        >
                          <b-form-input
                            id="formrow-email-input"
                            type="text"
                          ></b-form-input>
                        </b-form-group>
                      </div>
                      <div class="col-md-6">
                        <b-form-group
                          label="Phone Number"
                          label-for="formrow-password-input"
                          class="mb-3"
                        >
                          <b-form-input
                            id="formrow-password-input"
                            type="password"
                          ></b-form-input>
                        </b-form-group>
                      </div>
                      <div class="col-md-6">
                        <b-form-group
                          label="Farmer Groups"
                          label-for="formrow-password-input"
                          class="mb-3"
                        >
                          <select class="form-select">
                            <option value="Group 1">Group 1</option>
                            <option value="Group 2">Group 2</option>
                            <option value="Group 3">Group 3</option>
                            <option value="Group 4">Group 4</option>
                            <option value="Group 5">Group 5</option>

                          </select>
                        </b-form-group>
                      </div>
                      <div class="col-md-6">
                        <b-form-group
                          label="Total count on
planted crops"
                          label-for="formrow-email-input"
                          class="mb-3"
                        >
                          <b-form-input
                            id="formrow-email-input"
                            type="text"
                          ></b-form-input>
                        </b-form-group>
                      </div>
                      <div class="col-md-6">
                        <b-form-group
                          label="Total count on
planted crops"
                          label-for="formrow-email-input"
                          class="mb-3"
                        >
                          <b-form-input
                            id="formrow-email-input"
                            type="text"
                          ></b-form-input>
                        </b-form-group>
                      </div>
                    </div>
                    <div class="mt-4">
                      <b-button type="submit" variant="primary"
                      >Submit
                      </b-button
                      >
                    </div>
                  </form>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>
