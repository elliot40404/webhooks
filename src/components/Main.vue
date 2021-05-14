<template>
  <div class="bg">
    <h1>DASHBOARD</h1>
    <div class="grid">
      <div class="box box_one">
        <div class="c">
          <apexchart
            width="100%"
            height="80%"
            type="donut"
            :options="graph1.options"
            :series="graph1.series"
          ></apexchart>
        </div>
        <div class="c">
          <apexchart
            width="100%"
            height="90%"
            type="radialBar"
            :options="radialBar"
            :series="graph1.series"
          ></apexchart>
        </div>
      </div>
      <div class="box box_two">
        <apexchart
          width="100%"
          height="90%"
          type="bar"
          :options="graph2.options"
          :series="graph2.series"
        ></apexchart>
      </div>
      <div class="box box_three">
        <apexchart
          width="100%"
          height="90%"
          type="line"
          :options="graph2.options"
          :series="graph3.series"
        ></apexchart>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Main",
  data() {
    return {
      graph1: {
        options: {
          legend: {
            show: false,
          },
        },
        series: [44, 55, 41, 17, 15],
      },
      graph2: {
        options: {},
        series: [
          {
            data: [10, 20, 30, 40, 50, 60],
          },
        ],
      },
      graph3: {
        series: [
          {
            data: [11, 52, 30, 90, 29, 69],
          },
        ],
      },
      radialBar: {
        plotOptions: {
          radialBar: {
            dataLabels: {
              total: {
                show: true,
                label: "Total",
                formatter: function (w) {
                  return 249;
                },
              },
            },
          },
        },
      },
    };
  },
  mounted() {
    setInterval(() => {
      this.api();
    }, 1000 * 30);
  },
  created() {
    const size = document.body.clientWidth
    window.addEventListener('resize', (e) => {
      const sizem = document.body.clientWidth
      if (Math.abs(size - sizem) > 100) {
        window.location.replace(location.href)
      }
    })
  },
  methods: {
    update(a, b, c) {
      this.graph1.series.shift();
      this.graph1.series.push(a);
      this.graph2.series[0].data.shift();
      this.graph2.series[0].data.push(b);
      this.graph3.series[0].data.shift();
      this.graph3.series[0].data.push(c);
    },
    async api() {
      const req = await fetch("/api/data");
      const res = await req.json();
      if (res !== "") {
        this.update(res.a, res.b, res.c);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.bg {
  background: #171721;
  height: 100vh;
  width: calc(100vw - 100px);
  display: flex;
  flex-direction: column;
}
h1 {
  color: cyan;
  padding: 1em;
}
.grid {
  height: 85%;
  width: 95%;
  align-self: center;
  justify-self: center;
  display: grid;
  padding: 10px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 20px;
}
.box {
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.192);
  padding: 10px;
}
.box_one {
  display: flex;
  .c {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.box_two {
  padding: 10px;
}
.box_three {
  grid-column: 1 / -1;
}
@media only screen and (max-width: 1300px) {
  .grid {
    height: 85%;
    width: 95%;
    align-self: center;
    justify-self: center;
    display: grid;
    padding: 10px;
    grid-template-columns: auto;
    grid-auto-rows: minmax(400px,auto);
    gap: 20px;
  }
  .box{
    min-height: 250px;
  }
}
@media only screen and (max-width: 769px) {
  .box_one {
    flex-direction: column;
    min-height: 500px;
  }
}
</style>