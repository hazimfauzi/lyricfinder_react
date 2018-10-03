import React from 'react'
import { Link } from 'react-router-dom'

const Track = (props) => {
    const { track } = props;

    return (
        <div className="col-md-6">
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <div className="row mb-3">
                        <div className="col-md-3">
                            <img src={track.album_coverart_100x100} alt="" />
                        </div>
                        <div className="col-md-9">
                            <h5>{track.artist_name}</h5>
                            <p className="card-text">
                                <strong><i className="fas fa-play"></i></strong> : {track.track_name}
                                <br />
                                <strong><i className="fas fa-compact-disc"></i></strong> : {track.album_name}
                            </p>
                        </div>
                    </div>
                    <Link to={`lyrics/track/${track.track_id}`} className="btn btn-dark btn-block">
                        <i className="fas fa-chevron-right"></i> View Lyric
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Track