import React from 'react';
import PropTypes from 'prop-types';

class MiradorViewer extends React.Component {
	componentDidMount() {
		const { manifestUri } = this.props;

		setTimeout(() => {
      Mirador({
        id: "miradorViewer",
        layout: "1x1",

        data: [
          {
						manifestUri,
						location: "Harvard University"
					}
        ],

        windowObjects: [{
					loadedManifest: manifestUri,
				}],

        windowSettings: {
          sidePanel: false,
          canvasControls: {
            annotations: {
              annotationLayer: false
            },
            imageManipulation: {
	            manipulationLayer: false
            },
          },
          displayLayout: false,
        },

        mainMenuSettings: {
          show: false
        },
      });
		}, 1000);
	}

	render() {
		return (
			<div
				id="miradorViewer"
				className="miradorViewer"
				style={{
					position: 'fixed',
					top: 0,
					left: 0,
					width: '100vw',
					height: '100vh',
				}}
			/>
		)
	}
}

MiradorViewer.propTypes = {
	manifestUri: PropTypes.string,
}

export default MiradorViewer;
