import React from "react"
import RectangularVolumeCalculator from "../components/rectangual_volume_calculator"
import CylinderVolumeCalculator from "../components/cylinder_volume_calculator"
import CubeVolumeCalculator from "../components/cube_volume_calculator"
import Flexbox from "flexbox-react"
import Tabs from "react-bootstrap/Tabs"
import Tab from "react-bootstrap/Tab"
import PondVolumeCalculator from "../components/pond_volume_calculator"
import ConeVolumeCalculator from "../components/cone_volume_calculator"
import SphereVolumeCalculator from "../components/sphere_volume_calculator"
import CalculatorDescription from "../components/calculator_description"

class VolumeCalculators extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Tabs defaultActiveKey="cuboid" id="uncontrolled-tab-example">
        <Tab eventKey="cuboid" title="Cuboid">
          <Flexbox flexWrap="wrap">
            <Flexbox>
              <RectangularVolumeCalculator />
            </Flexbox>
            <Flexbox
              alignItems={"flex-start"}
              maxWidth={"600px"}
              margin={"10px"}
              flexDirection={"column"}
            >
              <CalculatorDescription
                title={"From Wikipedia"}
                paragraphs={[
                  [
                    "",
                    `In geometry, a cuboid is a convex polyhedron bounded by six quadrilateral faces, whose polyhedral graph is the same as that of a cube. While mathematical literature refers to any such polyhedron as a cuboid,[1] other sources use "cuboid" to refer to a shape of this type in which each of the faces is a rectangle (and so each pair of adjacent faces meets in a right angle); this more restrictive type of cuboid is also known as a rectangular cuboid, right cuboid, rectangular box, rectangular hexahedron, right rectangular prism, or rectangular parallelepiped`,
                  ],
                  [
                    "Rectangular cuboid",
                    `In a rectangular cuboid, all angles are right angles, and opposite faces of a cuboid are equal. By definition this makes it a right rectangular prism, and the terms rectangular parallelepiped or orthogonal parallelepiped are also used to designate this polyhedron. The terms "rectangular prism" and "oblong prism", however, are ambiguous, since they do not specify all angles.

                  The square cuboid, square box, or right square prism (also ambiguously called square prism) is a special case of the cuboid in which at least two faces are squares. It has Schläfli symbol {4} × { }, and its symmetry is doubled from [2,2] to [4,2], order 16.
                  
                  The cube is a special case of the square cuboid in which all six faces are squares. It has Schläfli symbol {4,3}, and its symmetry is raised from [2,2], to [4,3], order 48.
                  
                  If the dimensions of a rectangular cuboid are a, b and c, then its volume is abc and its surface area is 2(ab + ac + bc).`,
                  ],
                ]}
              />
            </Flexbox>
          </Flexbox>
        </Tab>
        <Tab eventKey="cylinder" title="Cylinder">
          <Flexbox flexWrap="wrap">
            <Flexbox>
              <CylinderVolumeCalculator />
            </Flexbox>
            <Flexbox
              alignItems={"flex-start"}
              maxWidth={"600px"}
              margin={"10px"}
              flexDirection={"column"}
            >
              <CalculatorDescription
                title={"From Wikipedia"}
                paragraphs={[
                  [
                    "",
                    `A cylinder is one of the most basic curved geometric shapes, with the surface formed by the points at a fixed distance from a given line segment, known as the axis of the cylinder. The shape can be thought of as a circular prism. Both the surface and the solid shape created inside can be called a cylinder. The surface area and the volume of a cylinder have been known since ancient times.

                    In differential geometry, a cylinder is defined more broadly as any ruled surface which is spanned by a one-parameter family of parallel lines. A cylinder whose cross section is an ellipse, parabola, or hyperbola is called an elliptic cylinder, parabolic cylinder, or hyperbolic cylinder respectively.`,
                  ],
                  [
                    "Common use",
                    `In common use a cylinder is taken to mean a finite section of a right circular cylinder, i.e., the cylinder with the generating lines perpendicular to the bases, with its ends closed to form two circular surfaces, as in the figure (right). If the cylinder has a radius r and length (height) h, then its volume is given by:

                    V = πr2h`,
                  ],
                ]}
              />
            </Flexbox>
          </Flexbox>
        </Tab>
        <Tab eventKey="cube" title="Cube">
          <Flexbox flexWrap="wrap">
            <Flexbox>
              <CubeVolumeCalculator />
            </Flexbox>
            <Flexbox
              alignItems={"flex-start"}
              maxWidth={"600px"}
              margin={"10px"}
              flexDirection={"column"}
            >
              <CalculatorDescription
                title={"From Wikipedia"}
                paragraphs={[
                  [
                    "",
                    `In geometry, a cube is a three-dimensional solid object bounded by six square faces, facets or sides, with three meeting at each vertex.

                    The cube is the only regular hexahedron and is one of the five Platonic solids. It has 6 faces, 12 edges, and 8 vertices.
                    
                    The cube is also a square parallelepiped, an equilateral cuboid and a right rhombohedron. It is a regular square prism in three orientations, and a trigonal trapezohedron in four orientations.
                    
                    The cube is dual to the octahedron. It has cubical or octahedral symmetry.
                    
                    The cube is the only convex polyhedron whose faces are all squares. `,
                  ],
                  [],
                ]}
              />
            </Flexbox>
          </Flexbox>
        </Tab>
        <Tab eventKey="pond" title="Pond">
          <Flexbox>
            <PondVolumeCalculator />
          </Flexbox>
        </Tab>
        <Tab eventKey="cone" title="Cone">
          <Flexbox>
            <ConeVolumeCalculator />
          </Flexbox>
        </Tab>
        <Tab eventKey="sphere" title="Sphere">
          <Flexbox>
            <SphereVolumeCalculator />
          </Flexbox>
        </Tab>
      </Tabs>
    )
  }
}

export default VolumeCalculators
