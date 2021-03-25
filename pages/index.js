const Index = () => (
<a-scene embedded arjs="debugUIEnabled:false; sourceType: webcam;"> // ※1
        <a-marker preset="custom" type='pattern' url="my-icon-marker.patt"> // ※2
            <a-text value="My name is soeyu!\n Nice to meet you!" position=" 0 0 1" align="center" rotation="-90 0 0" color="#7993ff"> // ※3
            </a-text>
        </a-marker>
    <a-entity camera></a-entity>
</a-scene>
)

export default Index
