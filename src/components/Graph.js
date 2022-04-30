import React from "react";
import { Graph } from "react-d3-graph";
import './graph.css'
export default function GraphComp() {
    const [ref, setRef] = React.useState(null);
    const config = {
        directed: true,
        automaticRearrangeAfterDropNode: true,
        collapsible: true,
        height: window.innerHeight,
        highlightDegree: 2,
        highlightOpacity: 0.2,
        linkHighlightBehavior: true,
        maxZoom: 12,
        minZoom: 0.05,
        nodeHighlightBehavior: true, // comment this to reset nodes positions to work
        panAndZoom: false,
        staticGraph: false,
        width: window.innerWidth,
        d3: {
            alphaTarget: 0.05,
            gravity: -150,
            linkLength: 120,
            linkStrength: 2
        },
        node: {
            color: "#d3d3d3",
            fontColor: "black",
            fontSize: 10,
            fontWeight: "normal",
            highlightColor: "red",
            highlightFontSize: 14,
            highlightFontWeight: "bold",
            highlightStrokeColor: "red",
            highlightStrokeWidth: 1.5,
            labelProperty: (n) => (n.name ? `${n.id} - ${n.name}` : n.id),
            mouseCursor: "crosshair",
            opacity: 0.9,
            renderLabel: true,
            size: 200,
            strokeColor: "none",
            strokeWidth: 1.5,
            svg: "",
            symbolType: "circle",
            viewGenerator: null
        },
        link: {
            color: "lightgray",
            highlightColor: "red",
            mouseCursor: "pointer",
            opacity: 1,
            semanticStrokeWidth: true,
            strokeWidth: 3,
            type: "STRAIGHT"
        }
    };
    const data = {
        links: [
            // Groups
            {
                source: "jorge",
                target: "blanco"
            },
            {
                source: "perraka",
                target: "bruka"
            },
            {
                source: "polako",
                target: "contri"
            },
            // Heroes
            {
                source: "polako",
                target: "lesbocha"
            },
            {
                source: "polako",
                target: "elxevi"
            },
            {
                source: "polako",
                target: "cometa"
            },
            {
                source: "la yeni",
                target: "jorge"
            },
            {
                source: "bruka",
                target: "tito"
            },
            {
                source: "keri",
                target: "jami"
            },
            {
                source: "nat",
                target: "kurni"
            },
            {
                source: "nat",
                target: "pauet"
            }
        ],
        nodes: [
            // Groups
            {
                id: "Marvel",
                svg:
                    "http://marvel-force-chart.surge.sh/marvel_force_chart_img/top_spiderman.png",
                size: 500,
                fontSize: 18
            },
            {
                id: "Heroes",
                symbolType: "circle",
                color: "red",
                size: 300
            },
            {
                id: "Villains",
                symbolType: "circle",
                color: "red",
                size: 300
            },
            {
                id: "Teams",
                symbolType: "circle",
                color: "red",
                size: 300
            },
            // Heroes
            {
                id: "jami",
                name: "Miquel Puig",
                svg:
                    "http://marvel-force-chart.surge.sh/marvel_force_chart_img/top_spiderman.png",
                size: 400
            },
            {
                id: "jorge",
                name: "Jordi Cases",
                svg:
                    "http://marvel-force-chart.surge.sh/marvel_force_chart_img/top_captainmarvel.png",
                size: 400
            },
            {
                id: "tito",
                name: "Robert Brell",
                svg:
                    "http://marvel-force-chart.surge.sh/marvel_force_chart_img/top_hulk.png",
                size: 400
            },
            {
                id: "kurni",
                name: "Joan Cornella",
                svg:
                    "http://marvel-force-chart.surge.sh/marvel_force_chart_img/top_blackwidow.png",
                size: 400
            },
            {
                id: "pauet",
                name: "Pau Gratacos",
                svg:
                    "http://marvel-force-chart.surge.sh/marvel_force_chart_img/top_daredevil.png",
                size: 400
            },
            {
                id: "perraka",
                name: "Guillem Perramon",
                svg:
                    "http://marvel-force-chart.surge.sh/marvel_force_chart_img/top_wolverine.png",
                size: 400
            },
            {
                id: "polako",
                name: "Pol Ros",
                svg:
                    "http://marvel-force-chart.surge.sh/marvel_force_chart_img/top_captainamerica.png",
                size: 400
            },
            {
                id: "elxevi",
                name: "Xevi Losada",
                svg:
                    "http://marvel-force-chart.surge.sh/marvel_force_chart_img/top_ironman.png",
                size: 400
            },
            {
                id: "cometa",
                name: "Ferran Comet",
                svg:
                    "http://marvel-force-chart.surge.sh/marvel_force_chart_img/top_thor.png",
                size: 400
            },
            // Villains
            {
                id: "la yeni",
                name: "Jenifer Garcia",
                svg:
                    "http://marvel-force-chart.surge.sh/marvel_force_chart_img/drdoom.png",
                size: 400
            },
            {
                id: "bruka",
                name: "Bruna Carreres",
                svg:
                    "http://marvel-force-chart.surge.sh/marvel_force_chart_img/mystique.png",
                size: 400
            },
            {
                id: "keri",
                name: "Queralt Farreta",
                svg:
                    "http://marvel-force-chart.surge.sh/marvel_force_chart_img/redskull.png",
                size: 400
            },
            {
                id: "blanco",
                name: "Elena Trimpa",
                svg:
                    "http://marvel-force-chart.surge.sh/marvel_force_chart_img/ronan.png",
                size: 400
            },
            {
                id: "nat",
                name: "Joana Subirana",
                svg:
                    "http://marvel-force-chart.surge.sh/marvel_force_chart_img/magneto.png",
                size: 400
            },
            {
                id: "contri",
                name: "Alexia Contradall",
                svg:
                    "http://marvel-force-chart.surge.sh/marvel_force_chart_img/thanos.png",
                size: 400
            },
            {
                id: "lesbocha",
                name: "Marina Augura",
                svg:
                    "http://marvel-force-chart.surge.sh/marvel_force_chart_img/blackcat.png",
                size: 400
            },
            // Teams
            {
                id: "Avengers",
                name: "",
                svg:
                    "http://marvel-force-chart.surge.sh/marvel_force_chart_img/avengers.png",
                size: 400
            },
            {
                id: "Guardians of the Galaxy",
                name: "",
                svg:
                    "http://marvel-force-chart.surge.sh/marvel_force_chart_img/gofgalaxy.png",
                size: 400
            },
            {
                id: "Defenders",
                name: "",
                svg:
                    "http://marvel-force-chart.surge.sh/marvel_force_chart_img/defenders.png",
                size: 400
            },
            {
                id: "X-Men",
                name: "",
                svg:
                    "http://marvel-force-chart.surge.sh/marvel_force_chart_img/xmen.png",
                size: 400
            },
            {
                id: "Fantastic Four",
                name: "",
                svg:
                    "http://marvel-force-chart.surge.sh/marvel_force_chart_img/fantasticfour.png",
                size: 400
            },
            {
                id: "Inhumans",
                name: "",
                svg:
                    "http://marvel-force-chart.surge.sh/marvel_force_chart_img/inhumans.png",
                size: 400
            }
        ]
    };

    const resetNodesPositions = React.useCallback(() => {
        if (ref) ref.resetNodesPositions();
    }, [ref]);

    const handleRefChange = React.useCallback((ref) => {
        setRef(ref);
    }, []);
    return (
        <div className="graph-container">
            <Graph id="test" data={data} config={config} ref={handleRefChange} />
        </div>
    );
}
