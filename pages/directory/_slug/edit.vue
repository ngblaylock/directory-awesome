<template>
  <div class="row">
    <div class="col-sm-12">
      <h1 v-if="$route.params.slug != 'new'">Edit: {{ $route.params.slug }}</h1>
      <h1 v-else>New Person</h1>
    </div>
    <div class="col-sm-9">
      <form>
        <div>
          <label for="name">Name</label>
          <input type="text" required id="name" v-model="person.name" />
        </div>
        <p v-if="person.nameSlug" class="helper">{{ person.nameSlug }}</p>
        <div>
          <label for="image">Image</label>
          <input type="text" required id="image" v-model="person.img" />
        </div>
        <div>
          <label for="email">Email</label>
          <input type="email" required id="email" v-model="person.email" />
        </div>
        <div>
          <label for="phone">Phone</label>
          <input type="text" required id="phone" v-model="person.phone" />
        </div>
        <div>
          <label for="office">Office</label>
          <input type="text" required id="office" v-model="person.office" />
        </div>
        <div>
          <label for="bio">Bio</label>
          <textarea required id="bio" v-model="person.bio"></textarea>
        </div>
        <template v-if="$route.params.slug == 'new'">
          <button @click.prevent="addPerson" class="btn" style="margin-left: 112px;">Add New Person</button>
        </template>
        <template v-else>
          <button @click.prevent="updatePerson" class="btn" style="margin-left: 112px;">Update</button>
          <button class="btn btn-clear" @click.prevent="deletePerson">
            Delete
          </button>
        </template>
      </form>
    </div>
    <div class="col-sm-3" v-if="person.img">
      <img :src="person.img" alt="" style="max-width: 100%" />
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "EditPerson",
  data: function () {
    return {
      person: {
        name: "",
        nameSlug: "",
        img: "",
        email: "",
        phone: "",
        office: "",
        bio: "",
      },
    };
  },
  methods: {
    deletePerson: function () {
      axios
        .delete(
          `https://jsonbox.io/directoryawesome_asdfjkl1234567890/${this.person._id}`
        )
        .then((response) => {
          console.log("Person Deleted");
          window.location.href = "/directory";
        })
        .catch((err) => {
          console.log(err);
        });
    },
    addPerson: function(){
      axios
        .post(
          `https://jsonbox.io/directoryawesome_asdfjkl1234567890`,
          this.person
        )
        .then((response) => {
          console.log("New Person Added");
          window.location.href = "/directory";
        })
        .catch((err) => {
          console.log(err);
        });
    },
    updatePerson: function () {
      axios
        .put(
          `https://jsonbox.io/directoryawesome_asdfjkl1234567890/${this.person._id}`,
          this.person
        )
        .then((response) => {
          console.log("Person Updated");
          window.location.href = "/directory";
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  watch: {
    "person.name": function () {
      const a =
        "àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;";
      const b =
        "aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------";
      const p = new RegExp(a.split("").join("|"), "g");

      this.person.nameSlug = this.person.name
        .toString()
        .toLowerCase()
        .replace(/\s+/g, "-") // Replace spaces with -
        .replace(p, (c) => b.charAt(a.indexOf(c))) // Replace special characters
        .replace(/&/g, "-and-") // Replace & with 'and'
        .replace(/[^\w\-]+/g, "") // Remove all non-word characters
        .replace(/\-\-+/g, "-") // Replace multiple - with single -
        .replace(/^-+/, "") // Trim - from start of text
        .replace(/-+$/, ""); // Trim - from end of text
    },
  },
  created: function () {
    let sp = this.$attrs.selectedPerson;
    console.log(sp);
    if (sp) {
      console.log("yep");
      this.person = { ...sp };
    }
  },
};
</script>

<style lang="scss" scoped>
.helper {
  padding-left: 112px;
  margin-top: -15px;
  font-size: 0.6em;
  margin-bottom: 0;
  color: grey;
}
button[type] {
  margin-left: 112px;
}
form div {
  display: flex;
  padding: 12px;
  label {
    display: inline-block;
    width: 100px;
    text-align: right;
    padding-right: 15px;
  }
  input,
  textarea {
    flex: 1 1 auto;
    font-weight: 300;
    padding: 8px;
    font-size: 0.8em;
    border: 1px solid rgb(189, 189, 189);
    border-radius: 4px;
    background: #f8f8f8;
  }
  textarea {
    height: 8em;
  }
}
</style>
