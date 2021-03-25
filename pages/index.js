const Index = () => (
    <body style="margin:0px; overflow:hidden;">
        <script src="https://aframe.io/releases/0.8.0/aframe.min.js"></script>
        <script src="https://jeromeetienne.github.io/AR.js/aframe/build/aframe-ar.js"></script>

        <a-scene embedded arjs="debugUIEnabled:false; sourceType: webcam;">
            <a-marker preset="custom" type='pattern' url="my-icon-marker.patt">
              <a-text value="My name is soeyu!\n Nice to meet you!" position=" 0 0 1" align="center" rotation="-90 0 0" color="#7993ff">
              </a-text>
            </a-marker>
            <a-entity camera></a-entity>
        </a-scene>
    </body>
)

export default Index
