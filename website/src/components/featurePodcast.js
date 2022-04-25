import React from 'react';
import classnames from 'classnames';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from '../pages/styles.module.css';
import Soundcloud from '../components/soundcloud';
import SpotifyCompact from '../components/spotifyCompact';

export default function FeaturePodcast(props) {

    var defined = function(property){
        return typeof property !== 'undefined';
    };

    if(!props.featured){
        return;
    }

    return (
        <div className={classnames('text--center col col--4 padding')}>
            <h3>{props.title}</h3>
            {props.type === "soundcloud" &&
                <Soundcloud scsrc={props.src} />
            }
            {props.type === "spotify" &&
                <SpotifyCompact scsrc={props.src} />
            } 
            {defined(props.podcastUrl) && defined(props.podcast) && props.podcast !== '' &&
                <a href={props.podcastUrl}>{props.podcast}</a>
            }
            {defined(props.description) && props.description !== '' &&
                <p>{props.description}</p>
            }
        </div>
    );
};