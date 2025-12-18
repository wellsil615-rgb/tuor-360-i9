var APP_DATA = {
  "scenes": [
    {
      "id": "0-fachada",
      "name": "Fachada",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.530113331253407,
          "pitch": 0.20757184716148736,
          "rotation": 0,
          "target": "1-entrada-1"
        },
        {
          "yaw": 0.03356696656542013,
          "pitch": 0.23414742658132504,
          "rotation": 0,
          "target": "2-entrada-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-entrada-1",
      "name": "Entrada 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.4733187301930704,
          "pitch": 0.4761066488213572,
          "rotation": 0,
          "target": "2-entrada-2"
        },
        {
          "yaw": 2.941803905846246,
          "pitch": 0.4971356287879498,
          "rotation": 0,
          "target": "0-fachada"
        },
        {
          "yaw": -0.09207199788234988,
          "pitch": 0.39278697112485617,
          "rotation": 0,
          "target": "3-caixa"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-entrada-2",
      "name": "Entrada 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": -0.5796740116902832,
        "pitch": 0.2645475215066213,
        "fov": 1.2988261968502064
      },
      "linkHotspots": [
        {
          "yaw": -1.6470477360729046,
          "pitch": 0.4758542675000079,
          "rotation": 0,
          "target": "1-entrada-1"
        },
        {
          "yaw": -2.9852386105384987,
          "pitch": 0.5341975094816576,
          "rotation": 0,
          "target": "0-fachada"
        },
        {
          "yaw": 0.1695236908255211,
          "pitch": 0.4092361194558478,
          "rotation": 0,
          "target": "6-meio-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-caixa",
      "name": "Caixa",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.2739344052824215,
          "pitch": 0.3687508473288439,
          "rotation": 0,
          "target": "4-meio-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-meio-1",
      "name": "Meio 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.7267483552734824,
          "pitch": 0.41043701948103184,
          "rotation": 0,
          "target": "7-final"
        },
        {
          "yaw": 0.8963286477030366,
          "pitch": 0.4853667710257419,
          "rotation": 0,
          "target": "6-meio-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-final-2",
      "name": "Final 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.2196740810848787,
          "pitch": 0.44383705964773057,
          "rotation": 0,
          "target": "7-final"
        },
        {
          "yaw": -0.40388931398039496,
          "pitch": 0.4211613291373659,
          "rotation": 0,
          "target": "6-meio-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-meio-2",
      "name": "Meio 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.655509788329576,
          "pitch": 0.5326188228779234,
          "rotation": 0,
          "target": "4-meio-1"
        },
        {
          "yaw": -1.9958470713383285,
          "pitch": 0.4497370000322434,
          "rotation": 0,
          "target": "5-final-2"
        },
        {
          "yaw": 1.0250267474791457,
          "pitch": 0.3473386376040217,
          "rotation": 0,
          "target": "2-entrada-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-final",
      "name": "Final",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.822240621053205,
          "pitch": 0.42000676333184117,
          "rotation": 0,
          "target": "4-meio-1"
        },
        {
          "yaw": 1.1126423932967135,
          "pitch": 0.40753989514451483,
          "rotation": 0,
          "target": "5-final-2"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "I9 Soluçoes em Limpeza",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
