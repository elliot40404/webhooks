<template>
  <div>
    <nav>
      <ul class="ul-one">
        <li data-text="Home">
          <router-link to="/">
            <ion-icon name="planet-outline"></ion-icon>
          </router-link>
        </li>
        <li class="menu">
          <ul class="ul-two">
            <li data-text="About">
              <router-link to="/about">
                <ion-icon name="person-circle-outline"></ion-icon>
              </router-link>
            </li>
            <li data-text="Charts">
              <router-link to="/dashboard">
                <ion-icon name="stats-chart-sharp"></ion-icon>
              </router-link>
            </li>
            <li data-text="API">
              <router-link to="/api"
                ><ion-icon name="rocket-outline"></ion-icon
              ></router-link>
            </li>
          </ul>
        </li>
        <li data-text="Setings">
          <router-link to="/settings">
            <ion-icon name="settings-outline"></ion-icon>
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<style lang="scss" scoped>
nav {
  position: fixed;
  left: 0;
  background: #000;
  height: 100vh;
  width: 100px;
  font-family: "Poppins", sans-serif;
  z-index: 10;
}
ul {
  list-style: none;
}
li {
  position: relative;
  height: 80px;
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 200ms ease;
  cursor: pointer;
  &:hover::after {
    content: attr(data-text);
    position: absolute;
    top: 50%;
    left: 100%;
    transform: translateY(-50%);
    font-size: 16px;
    color: yellowgreen;
    font-weight: 600;
  }
}
ion-icon {
  color: white;
  font-size: 40px;
}
.ul-one {
  height: 100vh;
  width: 100%;
  padding: 20px 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  li:first-child,
  li:last-child {
    &:hover {
      background: hsla(0, 10%, 92%, 0.103);
      border-radius: 10px;
    }
  }
}
.menu {
  .ul-two {
    li {
      margin: 50px 0;
      &:hover {
        background: hsla(0, 10%, 92%, 0.103);
        border-radius: 10px;
        ion-icon {
          color: rgb(255, 102, 0);
        }
      }
    }
  }
}
@media only screen and (max-width: 800px) {
  nav {
        bottom: 0;
        height: 100px;
        width: 100vw;
    }
    li {
        &:hover::after {
            top: 0;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }
    .ul-one {
        height: 100px;
        padding: 0;
        flex-direction: row;
    }
    .menu {
        .ul-two {
            display: flex;
            li {
                margin: 0;
            }
        }
    }
}
</style>