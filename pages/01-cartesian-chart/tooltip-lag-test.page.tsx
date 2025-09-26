// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { omit } from "lodash";

import CoreChart from "../../lib/components/internal-do-not-use/core-chart";
import { useChartSettings } from "../common/page-settings";
import { Page, PageSection } from "../common/templates";

export default function () {
  return (
    <Page
      title="Tooltip lag test"
      subtitle="This pages demonstrates a bug where the tooltip lags behind the selected point on React17."
    >
      <PageSection title="Example chart">
        <LineChart />
      </PageSection>
    </Page>
  );
}

function LineChart() {
  const { chartProps } = useChartSettings();

  return (
    <CoreChart
      {...omit(chartProps.cartesian, "ref")}
      key="line"
      // highcharts={Highcharts}
      // fitHeight={true}
      chartMinHeight={35}
      keyboardNavigation={true}
      data-testid="core-chart"
      verticalAxisTitlePlacement="side"
      legend={{
        enabled: true,
        position: "side",
        bottomMaxHeight: 74.45453796386718,
      }}
      tooltip={{
        enabled: true,
        placement: "outside",
        size: "large",
      }}
      options={{
        chart: {
          spacingBottom: 12,
          spacingTop: 12,
          spacingLeft: 12,
          spacingRight: 12,
          zooming: {
            type: "x",
            mouseWheel: {
              enabled: false,
            },
            resetButton: {
              theme: {
                style: {
                  display: "none",
                },
              },
            },
          },
          backgroundColor: "var(--color-background-container-content-h114dj, #ffffff)",
          plotBackgroundColor: "var(--color-background-container-content-h114dj, #ffffff)",
          borderColor: "var(--color-border-divider-default-nfermc, #c6c6cd)",
          type: "line",
          marginTop: 24,
          events: {},
        },
        credits: {
          enabled: false,
        },
        colors: [
          "#688ae8",
          "#c33d69",
          "#2ea597",
          "#8456ce",
          "#e07941",
          "#3759ce",
          "#962249",
          "#096f64",
          "#6237a7",
          "#a84401",
          "#273ea5",
          "#780d35",
          "#03524a",
          "#4a238b",
          "#7e3103",
          "#1b2b88",
          "#ce567c",
          "#003e38",
          "#9469d6",
          "#602400",
        ],
        legend: {
          enabled: false,
          align: "right",
          verticalAlign: "middle",
          layout: "vertical",
          itemStyle: {
            color: "var(--color-text-body-default-ryjct1, #0f141a)",
            fontFamily: "var(--font-family-base-4lwvpl, 'Amazon Ember', 'Helvetica Neue', Roboto, Arial, sans-serif)",
            fontSize: "var(--font-size-body-s-smc8cv, 12px)",
            fontWeight: "normal",
          },
          margin: 16,
          padding: 8,
          symbolWidth: 12,
          symbolHeight: 12,
          symbolRadius: 2,
          maxHeight: 100,
        },
        plotOptions: {
          series: {
            borderColor: "var(--color-border-divider-default-nfermc, #c6c6cd)",
            states: {
              hover: {
                enabled: true,
                lineWidth: 3,
                borderColor: "var(--color-border-segment-hover-941xea, #424650)",
              },
            },
            marker: {
              enabled: false,
              lineColor: "var(--color-border-divider-default-nfermc, #c6c6cd)",
              radius: 3,
              symbol: "circle",
            },
            connectNulls: false,
            lineWidth: 2,
            visible: true,
            dataLabels: {
              enabled: false,
            },
            cursor: "pointer",
            point: {
              events: {},
            },
          },
          pie: {
            innerSize: "55%",
            dataLabels: {
              style: {
                color: "var(--color-text-body-default-ryjct1, #0f141a)",
                fontFamily:
                  "var(--font-family-base-4lwvpl, 'Amazon Ember', 'Helvetica Neue', Roboto, Arial, sans-serif)",
              },
            },
            borderColor: "var(--color-border-divider-default-nfermc, #c6c6cd)",
          },
          solidgauge: {
            dataLabels: {
              style: {
                color: "var(--color-text-body-default-ryjct1, #0f141a)",
                fontFamily:
                  "var(--font-family-base-4lwvpl, 'Amazon Ember', 'Helvetica Neue', Roboto, Arial, sans-serif)",
              },
            },
          },
          area: {
            fillOpacity: 0.25,
          },
          areaspline: {
            fillOpacity: 0.25,
          },
        },
        xAxis: {
          scrollbar: {
            enabled: false,
            barBackgroundColor: "var(--color-background-container-content-h114dj, #ffffff)",
            barBorderColor: "var(--color-border-divider-default-nfermc, #c6c6cd)",
            buttonBackgroundColor: "var(--color-background-container-content-h114dj, #ffffff)",
            buttonBorderColor: "var(--color-border-divider-default-nfermc, #c6c6cd)",
            trackBackgroundColor: "var(--color-charts-line-grid-kjxf3m, #dedee3)",
            trackBorderColor: "var(--color-charts-line-axis-b95ncf, #dedee3)",
          },
          crosshair: {
            snap: false,
            width: 1,
            color: "#666",
            label: {
              backgroundColor: "var(--color-background-popover-2f8egd, #ffffff)",
              borderColor: "var(--color-border-divider-default-nfermc, #c6c6cd)",
            },
          },
          tickmarkPlacement: "on",
          gridLineWidth: 0,
          dateTimeLabelFormats: {
            millisecond: "%b %e, %H:%M:%S.%L",
            second: "%b %e, %H:%M:%S",
            minute: "%b %e, %H:%M",
            hour: "%b %e, %H:%M",
            day: "%b %e",
            week: "%b %e",
            month: "%b %Y",
            year: "%Y",
          },
          labels: {
            format: "{value:%b %e,<br>%H:%M}",
          },
          min: 1758641040000,
          max: 1758651840000,
          visible: true,
          type: "datetime",
          plotLines: [],
          plotBands: [],
          events: {},
        },
        yAxis: {
          scrollbar: {
            enabled: false,
            barBackgroundColor: "var(--color-background-container-content-h114dj, #ffffff)",
            barBorderColor: "var(--color-border-divider-default-nfermc, #c6c6cd)",
            buttonBackgroundColor: "var(--color-background-container-content-h114dj, #ffffff)",
            buttonBorderColor: "var(--color-border-divider-default-nfermc, #c6c6cd)",
            trackBackgroundColor: "var(--color-charts-line-grid-kjxf3m, #dedee3)",
            trackBorderColor: "var(--color-charts-line-axis-b95ncf, #dedee3)",
          },
          opposite: false,
          crosshair: {
            snap: false,
            width: 1,
            color: "var(--color-charts-line-grid-kjxf3m, #dedee3)",
            label: {
              backgroundColor: "var(--color-background-popover-2f8egd, #ffffff)",
              borderColor: "var(--color-border-divider-default-nfermc, #c6c6cd)",
            },
          },
          gridLineWidth: 1,
          gridLineColor: "var(--color-charts-line-grid-kjxf3m, #dedee3)",
          lineColor: "var(--color-charts-line-axis-b95ncf, #dedee3)",
          tickColor: "var(--color-charts-line-tick-xmcbvk, #dedee3)",
          title: {
            text: "",
            align: "high",
            offset: 0,
            rotation: 0,
            y: -10,
            textAlign: "left",
            reserveSpace: false,
          },
          type: "linear",
          visible: true,
          plotLines: [],
          plotBands: [],
          endOnTick: true,
        },
        title: {
          style: {
            color: "var(--color-text-body-default-ryjct1, #0f141a)",
            fontFamily: "var(--font-family-base-4lwvpl, 'Amazon Ember', 'Helvetica Neue', Roboto, Arial, sans-serif)",
          },
          text: "",
        },
        subtitle: {
          style: {
            color: "var(--color-text-body-default-ryjct1, #0f141a)",
            fontFamily: "var(--font-family-base-4lwvpl, 'Amazon Ember', 'Helvetica Neue', Roboto, Arial, sans-serif)",
            fontSize: "var(--font-size-body-s-smc8cv, 12px)",
          },
          text: "",
        },
        lang: {},
        navigator: {
          enabled: false,
          accessibility: {
            enabled: true,
          },
          height: 30,
          outlineColor: "var(--color-border-divider-default-nfermc, #c6c6cd)",
          maskFill: "rgb(0,7,158, 0.2)",
          handles: {
            backgroundColor: "var(--color-background-control-default-k5dlqw, #ffffff)",
            borderColor: "var(--color-border-divider-default-nfermc, #c6c6cd)",
            height: 30,
          },
          xAxis: {
            crosshair: {
              snap: false,
              width: 1,
              color: "#666",
              label: {
                backgroundColor: "var(--color-background-popover-2f8egd, #ffffff)",
                borderColor: "var(--color-border-divider-default-nfermc, #c6c6cd)",
              },
            },
            tickmarkPlacement: "on",
            gridLineWidth: 0,
            dateTimeLabelFormats: {
              millisecond: "%b %e, %H:%M:%S.%L",
              second: "%b %e, %H:%M:%S",
              minute: "%b %e, %H:%M",
              hour: "%b %e, %H:%M",
              day: "%b %e",
              week: "%b %e",
              month: "%b %Y",
              year: "%Y",
            },
            labels: {
              format: "{value:%b %e,<br>%H:%M}",
              style: {},
            },
            min: 1758641040000,
            max: 1758651840000,
            visible: true,
            type: "datetime",
            plotLines: [],
            plotBands: [],
          },
          series: [
            {
              visible: true,
              lineWidth: 1,
              type: "line",
              data: [
                [1758641040000, 3],
                [1758641340000, 49],
                [1758641640000, 50],
                [1758641940000, 56],
                [1758642240000, 41],
                [1758642540000, 46],
                [1758642840000, 50],
                [1758643140000, 47],
                [1758643440000, 58],
                [1758643740000, 59],
                [1758644040000, 51],
                [1758644340000, 45],
                [1758644640000, 49],
                [1758644940000, 51],
                [1758645240000, 53],
                [1758645540000, 45],
                [1758645840000, 45],
                [1758646140000, 46],
                [1758646440000, 47],
                [1758646740000, 42],
                [1758647040000, 48],
                [1758647340000, 48],
                [1758647640000, 50],
                [1758647940000, 49],
                [1758648240000, 52],
                [1758648540000, 55],
                [1758648840000, 49],
                [1758649140000, 46],
                [1758649440000, 47],
                [1758649740000, 39],
                [1758650040000, 43],
                [1758650340000, 52],
                [1758650640000, 45],
                [1758650940000, 42],
                [1758651240000, 42],
                [1758651540000, 44],
              ],
              color: "#1f77b4",
            },
          ],
        },
        series: [
          {
            name: "1. count()",
            type: "line",
            data: [
              [1758641040000, 3],
              [1758641340000, 49],
              [1758641640000, 50],
              [1758641940000, 56],
              [1758642240000, 41],
              [1758642540000, 46],
              [1758642840000, 50],
              [1758643140000, 47],
              [1758643440000, 58],
              [1758643740000, 59],
              [1758644040000, 51],
              [1758644340000, 45],
              [1758644640000, 49],
              [1758644940000, 51],
              [1758645240000, 53],
              [1758645540000, 45],
              [1758645840000, 45],
              [1758646140000, 46],
              [1758646440000, 47],
              [1758646740000, 42],
              [1758647040000, 48],
              [1758647340000, 48],
              [1758647640000, 50],
              [1758647940000, 49],
              [1758648240000, 52],
              [1758648540000, 55],
              [1758648840000, 49],
              [1758649140000, 46],
              [1758649440000, 47],
              [1758649740000, 39],
              [1758650040000, 43],
              [1758650340000, 52],
              [1758650640000, 45],
              [1758650940000, 42],
              [1758651240000, 42],
              [1758651540000, 44],
            ],
            marker: {
              enabled: false,
            },
            showInLegend: true,
            color: "#1f77b4",
          },
        ],
        time: {
          timezone: "UTC",
        },
        boost: {
          enabled: false,
        },
      }}
      noData={{
        statusType: "finished",
      }}
    />
  );
}
