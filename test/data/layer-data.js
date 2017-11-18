export const data = {
  "layergroupid":"f4591e1709797856197314e950fe8489:0",
  "metadata":{
    "layers":[
      {
        "type":"http",
        "id":"http-layer0",
        "meta":{
          "stats":{

          }
        }
      },
      {
        "type":"mapnik",
        "id":"layer0",
        "meta":{
          "cartocss":"/** choropleth visualization */\n\n#european_countries_e{\n  polygon-fill: #FFFFB2;\n  polygon-opacity: 0.8;\n  line-color: #FFF;\n  line-width: 1;\n  line-opacity: 0.5;\n}\n#european_countries_e [ area <= 1638094] {\n   polygon-fill: #B10026;\n}\n#european_countries_e [ area <= 55010] {\n   polygon-fill: #E31A1C;\n}\n#european_countries_e [ area <= 34895] {\n   polygon-fill: #FC4E2A;\n}\n#european_countries_e [ area <= 12890] {\n   polygon-fill: #FD8D3C;\n}\n#european_countries_e [ area <= 10025] {\n   polygon-fill: #FEB24C;\n}\n#european_countries_e [ area <= 9150] {\n   polygon-fill: #FED976;\n}\n#european_countries_e [ area <= 5592] {\n   polygon-fill: #FFFFB2;\n}",
          "stats":{
            "estimatedFeatureCount":46
          },
          "cartocss_meta":{
            "rules":[

            ]
          }
        }
      },
      {
        "type":"http",
        "id":"http-layer1",
        "meta":{
          "stats":{

          }
        }
      }
    ],
    "dataviews":{

    },
    "analyses":[

    ]
  },
  "cdn_url":{
    "templates":{
      "http":{
        "url":"http://{s}.ashbu.cartocdn.com",
        "subdomains":[
          "0",
          "1",
          "2",
          "3"
        ]
      },
      "https":{
        "url":"https://cartocdn-ashbu_{s}.global.ssl.fastly.net",
        "subdomains":[
          "a",
          "b",
          "c",
          "d"
        ]
      }
    },
    "http":"ashbu.cartocdn.com",
    "https":"cartocdn-ashbu.global.ssl.fastly.net"
  },
  "last_updated":"1970-01-01T00:00:00.000Z"
};
