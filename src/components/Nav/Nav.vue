<script>
import { defineComponent } from "vue";
import { mapGetters } from "vuex";

export default defineComponent({
  data() {
    return {
      activeTab: 0,
      listFeature: [
        {
          id: "todo",
          label: "Todo",
          url: "/to-do",
          status: 'NEW',
        },
        {
          id: "inProgress",
          label: "In Progress",
          url: "/in-progress",
          status: 'IN_PROGRESS',
        },
        {
          id: "completed",
          label: "Completed",
          url: "/completed",
          status: 'COMPLETED',
        },
      ],
    };
  },
  computed: {
    ...mapGetters(["username", "count"]),
  },
  watch: {
    $route(to, from) {
      this.recalculateActive();
    },
  },
  mounted() {
    this.recalculateActive();
  },
  methods: {
    goTo(url) {
      this.$router.push(url);
    },
    recalculateActive() {
      const idx = this.listFeature.findIndex(
        (el) => el.url === this.$route.path
      );
      if (idx > -1) {
        this.activeTab = idx;
      }
    },
    openMenu() {
      const menu = document.getElementsByClassName("list-menu")[0];
      menu.classList.toggle("open");
    },
    onLogout() {
      alert("Logout");
    },
  },
});
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid menu-header">
      <a class="navbar-brand cursor-pointer" @click="goTo('/')">Stark</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="openMenu()"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse list-menu" id="navbarSupportedContent">
        <ul class="ul-list navbar-nav me-auto mb-2 mb-lg-0">
          <li
            v-for="(item, index) in listFeature"
            class="nav-item"
            :class="{ active: activeTab === index }"
            @click="goTo(item.url)"
          >
            <a class="nav-link"
              >{{ item.label
              }}<span v-if="count[item.status]" class="badge text-bg-danger">{{
                count[item.status]
              }}</span></a
            >
          </li>
        </ul>
        <ul class="ul-list-right navbar-nav mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" aria-current="page">{{ username }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page" @click="onLogout()"
              >Logout</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
.open {
  display: block !important;
}
@media screen and (max-width: 912px) and (min-width: 600px) {
  .collapse:not(.show) {
    display: flex;
  }
  .navbar-toggler {
    display: none;
  }
  .ul-list {
    display: grid;
    grid-template-columns: auto auto auto;
    margin-bottom: 0px !important;
  }
  .ul-list-right {
    display: grid;
    grid-template-columns: auto auto;
    margin-bottom: 0px !important;
    justify-content: flex-start;
  }
  .ul-list-right li {
    width: 100px;
  }
  .ul-list-right li a{
    width: 100%;
  }
  .menu-header {
    display: grid;
    grid-template-columns: 8% 92%;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
}
@media (max-width: 414px) {
  .collapse:not(.show) {
    display: none;
  }
}
.navbar {
  background-color: #222222 !important;
  padding: 0;
}
.nav-item {
  &.active,
  &:hover {
    background-color: #000;
    color: #fff;
    .nav-link {
      color: #fff;
    }
  }
}
.nav-link,
.navbar-brand {
  width: 115pt;
  height: 40pt;
  color: #999999;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}
.nav-link {
  font-size: 12pt;
}

.navbar-brand {
  font-size: 14pt;
  margin: 0;
}
.badge {
  margin-left: 12px;
  border-radius: 1rem;
}
.navbar-toggler {
  background-color: white;
}

@media (max-width: 990px) {
  .navbar-brand {
    width: unset;
  }
}
</style>
