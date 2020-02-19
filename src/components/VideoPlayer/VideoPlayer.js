import React from 'react'
import PropTypes from 'prop-types'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'
import 'assets/sass/videojs.scss'

//handle video seek

class VideoPlayer extends React.Component {
  componentDidMount() {
    this.player = videojs(this.videoNode, this.generatePlayerOptions())
    this.bindListeners()
  }

  // componentWillReceiveProps(nextProps) {
  //   console.log(nextProps)
  // }

  componentWillUnmount() {
    if (this.player) {
      this.player.dispose()
    }
  }

  generatePlayerOptions() {
    return {
      controls: this.props.controls,
      fluid: this.props.fluid,
      sources: this.props.sources,
      width: this.props.width,
      height: this.props.height,
      loop: this.props.loop,
      muted: this.props.muted,
      preload: this.props.preload,
      responsive: this.props.responsive,
      controlBar: {
        playToggle: true,
        volumeMenuButton: true,
        currentTimeDisplay: true,
        timeDivider: true,
        durationDisplay: true,
        progressControl : {
          seekBar: {
            loadProgressBar: true,
            mouseTimeDisplay: true,
            playProgressBar: true,
          }
        },
        liveDisplay: true,
        remainingTimeDisplay: false,
        customControlsSpacer: false,
        chaptersButton: false,
        subtitlesButton: false,
        captionsButton: false,
        pictureInPictureToggle: false,
        fullscreenToggle: true,
      }
    }
  }

  buildStatus() {
    return {
      duration: this.player.duration(),
      currentTime: this.player.currentTime(),
    }
  }

  bindListeners() {
    this.player.ready(() => {
      if (this.props.onReady) this.props.onReady()
    })

    this.player.on('play', () => {
      if (this.props.onPlay) this.props.onPlay(this.buildStatus())
    })

    this.player.on('pause', () => {
      if (this.props.onPause) this.props.onPause(this.buildStatus())
    })

    this.player.on('ended', () => { if (this.props.onEnd) this.props.onEnd() })

    this.player.on('timeupdate', () => {
      if (this.props.onTimeUpdate) this.props.onTimeUpdate(this.buildStatus())
    })
  }

  render() {
    return (
      <div className={this.props.className}>
        <div data-vjs-player>
          <video ref={ node => this.videoNode = node } className="video-js vjs-big-play-centered"></video>
        </div>
      </div>
    )
  }
}

VideoPlayer.propTypes = {
  controls: PropTypes.bool,
  fluid: PropTypes.bool,
  autoplay: PropTypes.oneOf([false, true, 'muted', 'play', 'any']),
  sources: PropTypes.array.isRequired,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  loop: PropTypes.bool,
  muted: PropTypes.bool,
  preload: PropTypes.oneOf(['auto', 'metadata', 'none']),
  responsive: PropTypes.bool,
  onReady: PropTypes.func,
  onPlay: PropTypes.func,
  onPause: PropTypes.func,
  onEnd: PropTypes.func,
  onTimeUpdate: PropTypes.func,
}

VideoPlayer.defaultProps = {
  controls: true,
  fluid: true,
  autoplay: false,
  loop: false,
  muted: false,
  preload: 'metadata',
  responsive: false,
}

export default VideoPlayer
