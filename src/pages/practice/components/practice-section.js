import React, { useState, useEffect } from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
const content = [
  [
    "React is extremely popular",
    "It makes building complex, interactive UIs a breeze",
    "It's powerful & flexible",
    "It has a very active and versatile ecosystem",
  ],
  [
    "Components, JSX & Props",
    "State",
    "Hooks (e.g., useEffect())",
    "Dynamic rendering",
  ],
  [
    "Official web page (react.dev)",
    "Next.js (Fullstack framework)",
    "React Native (build native mobile apps with React)",
  ],
  [
    "Basics. For every language one should Start with the basic concepts such as variables, data types, functions, loops, and conditionals",
    "Vanilla JavaScript is a core of the JavaScript language",
    "JavaScript is an object-oriented, interpreted scripting language. It’s a client-side scripting language that is used to develop dynamic web pages.",
    "So, Vanilla JS is plain JavaScript without any library and framework.",
  ],
];
function Demo() {
  const [activeContentIndex, setActiveContentIndex] = useState(0);
  return (
    <div className="demo-1 pb-5">
      <Container>
        <div className="padding-xl">
          <div className="position-relative">
            <div className="content">
              <Row>
                <Col lg="12">
                  <div id="tabs">
                    <menu>
                      <button
                        className={activeContentIndex === 0 ? "active" : ""}
                        onClick={() => setActiveContentIndex(0)}
                      >
                        Why React?
                      </button>
                      <button
                        className={activeContentIndex === 1 ? "active" : ""}
                        onClick={() => setActiveContentIndex(1)}
                      >
                        Core Features
                      </button>
                      <button
                        className={activeContentIndex === 2 ? "active" : ""}
                        onClick={() => setActiveContentIndex(2)}
                      >
                        Related Resources
                      </button>
                      <button
                        className={activeContentIndex === 3 ? "active" : ""}
                        onClick={() => setActiveContentIndex(3)}
                      >
                        Vanilla JavaScript
                      </button>
                    </menu>
                    <div id="tab-content">
                      <ul>
                        {content[activeContentIndex].map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Demo;
