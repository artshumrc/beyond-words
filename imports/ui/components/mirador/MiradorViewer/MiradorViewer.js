import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import Manifests from '/imports/api/collections/manifests';

class MiradorViewer extends React.Component {
	componentDidUpdate() {
		setTimeout(() => {
			const { manifest, manifestUri } = this.props;
			let miradorManifestUri = manifestUri;

			if (manifest) {
				miradorManifestUri = manifest.remoteUri;
			}

			console.log(miradorManifestUri);

			if (!miradorManifestUri) {
				return null;
			}

      Mirador({
        id: "miradorViewer",
        layout: "1x1",

        data: [
          {
						manifestUri: miradorManifestUri,
						location: "Harvard University"
					}
        ],

        windowObjects: [{
					loadedManifest: miradorManifestUri,
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
		const { manifest, manifestUri } = this.props;

		if (!manifest && !manifestUri) {
			// TODO: Return 404
			return null;
		}

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
	manifest: React.PropTypes.object,
	manifestUri: React.PropTypes.string,
}

export default createContainer((props) => {
	const handle = Meteor.subscribe('manifests');
	const manifest = Manifests.findOne({
		_id: props.id,
	});

	return {
		manifest,
		ready: handle.ready(),
	};
}, MiradorViewer);
