import { useEffect } from 'react';
const About = () => {

    useEffect(() => {
        window["alloy"]("sendEvent", {
          renderDecisions: true,
          xdm: {
              web: {
                  webPageDetails: {
                      viewName: "about"
                  }
              },
              eventType: "view-change"
          }
      }).then(({decisions = []}) => {
         
      });
      }, [])
    return (
        <div id="about">
             <h1>ABOUT</h1>
            <p>
                text 1 1
            </p>
            <p>
                text 1 1
            </p>
            <p>
                text 1 1
            </p>
            <p>
                text
            </p>
            <p>
                text
            </p>
            <p>
                text
            </p>
            <p>
                text
            </p>
            <p>
                text
            </p>
            <p>
                text
            </p>
            <p>
                text
            </p>
        </div>
    )
}

export default About;