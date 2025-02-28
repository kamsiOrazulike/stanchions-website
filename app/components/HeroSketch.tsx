/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { countryPoints } from "./countries";
import dynamic from "next/dynamic";
import React, { useRef, useEffect, useState } from "react";

type VertexCommand = "m" | "M";
type VertexCoordinate = [number, number];
type VertexMoveCommand = [VertexCommand, number, number];
type VertexPoint =
  | VertexMoveCommand
  | VertexCoordinate
  | "z"
  | string
  | (string | number)[];

interface Point {
  x: number;
  y: number;
}

interface Bounds {
  minX: number;
  maxX: number;
  minY: number;
  maxY: number;
}

interface CountryPoint {
  name: string;
  vertexPoint: VertexPoint[];
  colour?: string; 
}

const GlobeComponent: React.FC = () => {
  const sketchRef = useRef<HTMLDivElement>(null);
  const p5InstanceRef = useRef<any>(null);

  useEffect(() => {
    let p5: any;

    import("p5").then((p5Module) => {
      p5 = p5Module.default;

      if (p5InstanceRef.current) {
        p5InstanceRef.current.remove();
      }

      class Globe {
        private p: any;
        private size: number;
        private rotationY: number = 0;
        private rotationX: number;
        private texture: any;

        constructor(p: any, size: number) {
          this.p = p;
          this.size = size;
          this.rotationX = p.radians(-10);
          this.rotationY = p.radians(160);
          this.texture = this.createGlobeTexture();
        }

        private calculateBounds(points: CountryPoint[]): Bounds {
          return points.reduce(
            (bounds, country) => {
              if (!country.vertexPoint) return bounds;
              let coordPoint: [number, number] = [0, 0];

              country.vertexPoint.forEach((point) => {
                if (Array.isArray(point)) {
                  const [first, second, third] = point;
                  if (first === "m" || first === "M") {
                    coordPoint =
                      first === "m"
                        ? [
                            coordPoint[0] + (second as number),
                            coordPoint[1] + (third as number),
                          ]
                        : [second as number, third as number];
                  } else {
                    coordPoint[0] += point[0] as number;
                    coordPoint[1] += point[1] as number;
                  }
                  bounds.minX = Math.min(bounds.minX, coordPoint[0]);
                  bounds.maxX = Math.max(bounds.maxX, coordPoint[0]);
                  bounds.minY = Math.min(bounds.minY, coordPoint[1]);
                  bounds.maxY = Math.max(bounds.maxY, coordPoint[1]);
                }
              });
              return bounds;
            },
            { minX: Infinity, maxX: -Infinity, minY: Infinity, maxY: -Infinity }
          );
        }

        private calculateScale(bounds: Bounds): number {
          const width = bounds.maxX - bounds.minX;
          const height = bounds.maxY - bounds.minY;
          return Math.min(1800 / width, 900 / height);
        }

        private calculatePoint(
          coordPoint: [number, number],
          bounds: Bounds,
          scale: number
        ): Point {
          return {
            x: (coordPoint[0] - bounds.minX) * scale + 124,
            y: (coordPoint[1] - bounds.minY) * scale + 62,
          };
        }

        private drawCountry(
          graphics: any,
          country: CountryPoint,
          bounds: Bounds,
          scale: number
        ): void {
          let coordPoint: [number, number] = [0, 0];
          let startPoint: Point | null = null;

          country.vertexPoint.forEach((point) => {
            if (Array.isArray(point)) {
              const [first, second, third] = point;
              if (first === "m" || first === "M") {
                if (startPoint) {
                  graphics.vertex(startPoint.x, startPoint.y);
                  graphics.endShape(graphics.CLOSE);
                }
                graphics.beginShape();
                coordPoint =
                  first === "m"
                    ? [
                        coordPoint[0] + (second as number),
                        coordPoint[1] + (third as number),
                      ]
                    : [second as number, third as number];
                startPoint = this.calculatePoint(coordPoint, bounds, scale);
                graphics.vertex(startPoint.x, startPoint.y);
              } else {
                coordPoint[0] += point[0] as number;
                coordPoint[1] += point[1] as number;
                const { x, y } = this.calculatePoint(coordPoint, bounds, scale);
                graphics.vertex(x, y);
              }
            } else if (point === "z") {
              if (startPoint) {
                graphics.vertex(startPoint.x, startPoint.y);
                graphics.endShape(graphics.CLOSE);
              }
              startPoint = null;
            }
          });

          if (startPoint) {
            graphics.vertex((startPoint as Point).x, (startPoint as Point).y);
            graphics.endShape(graphics.CLOSE);
          }
        }

        private createGlobeTexture(): any {
          const mapGraphics = this.p.createGraphics(2048, 1024);
          mapGraphics.colorMode(this.p.RGB);
          mapGraphics.background(200, 200, 200);
          mapGraphics.strokeWeight(0.5);
          mapGraphics.stroke(0, 0, 0, 60);

          if (countryPoints?.length) {
            const bounds = this.calculateBounds(countryPoints);
            const scale = this.calculateScale(bounds);

            countryPoints.forEach((country) => {
              if (!country.vertexPoint) return;
              const countryName = country.name.toLowerCase();
              let fillColor;

              switch (countryName) {
                case "nigeria":
                  fillColor = this.p.color(255, 0, 0);
                  break;
                case "united arab emirates":
                  fillColor = this.p.color(255, 0, 0);
                  break;
                default:
                  fillColor = this.p.color(150, 150, 150); 
              }

              mapGraphics.fill(fillColor);
              this.drawCountry(mapGraphics, country, bounds, scale);
            });
          }
          return mapGraphics;
        }

        public draw(): void {
          this.p.push();
          this.p.noStroke();
          this.p.rotateX(this.rotationX);
          this.p.rotateY(this.rotationY);
          this.p.texture(this.texture);
          this.p.sphere(this.size);
          this.p.pop();

          this.rotationY += 0.002;
        }
      }

      const sketch = (p: any) => {
        let globe: Globe;

        p.setup = () => {
          const screenWidth = window.innerWidth;
          let size, globeSize;

          if (screenWidth < 768) {
            // Mobile view
            size = screenWidth * 0.8;
            globeSize = size * 0.3;
          } else if (screenWidth >= 768 && screenWidth < 1024) {
            // Tablet/iPad view
            size = screenWidth * 0.9;
            globeSize = size * 0.3;
          } else {
            // Desktop view
            size = Math.min(screenWidth, window.innerHeight);
            globeSize = size * 0.3;
          }

          p.createCanvas(size, size, p.WEBGL);
          p.colorMode(p.RGB);

          globe = new Globe(p, globeSize);
        };

        p.draw = () => {
          p.background(0, 0, 0, 0);
          p.ambientLight(200);
          p.pointLight(0, 0, 0, 0, 0, 50);
          p.directionalLight(255, 255, 255, 1, 1, -1);
          globe?.draw();
        };
      };

      if (sketchRef.current) {
        p5InstanceRef.current = new p5(sketch, sketchRef.current);
      }
    });

    return () => {
      if (p5InstanceRef.current) {
        p5InstanceRef.current.remove();
      }
    };
  }, []);

  return (
    <div
      ref={sketchRef}
      className="w-full flex justify-center items-center min-h-[250px] md:min-h-[400px] lg:min-h-[500px]"
    />
  );
};

const DynamicGlobe = dynamic(() => Promise.resolve(GlobeComponent), {
  ssr: false,
});

const SimpleLoader = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900" />
    </div>
  );
};

export default function HeroSketch() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const initializeApp = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setIsLoading(false);
        setShowContent(true);
      } catch (error) {
        console.error("Initialization error:", error);
        setIsLoading(false);
      }
    };

    initializeApp();
  }, []);

  return (
    <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
      {isLoading ? (
        <SimpleLoader />
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Globe */}
          <div className="h-full overflow-hidden">
            {showContent && <DynamicGlobe />}
          </div>

          {/* Right side - Text content */}
          {showContent && (
            <div className="text-center lg:text-left px-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                World-Class Oil and Gas
                <span className="text-red-600"> Services</span>
              </h1>
              <p className="text-gray-600 text-md sm:text-xl mb-8">
                Delivering exceptional warehousing, logistics, and engineering
                solutions since 1997.
              </p>
              <a
                href="/about-us"
                className="border border-black text-black px-8 py-3 rounded-nonehover:bg-white hover:bg-red-500 hover:border-red-500 hover:text-white transition-all duration-300 mt-4 text-base"
              >
                Learn More About Us
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
