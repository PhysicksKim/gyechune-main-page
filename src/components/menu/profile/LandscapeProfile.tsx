import React from 'react';

import chunsik from '@assets/image/chunsik_character.png';

import '@styles/menu/profile/LandscapeProfile.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { INTRODUCE_TEXT } from '@src/assets/contents/contents';
import { Description } from './Description';

export interface LandscapeProfileProps {
  animateClass: string;
  handleModalClose: () => void;
}

const LandscapeProfile: React.FC<LandscapeProfileProps> = ({
  animateClass,
  handleModalClose,
}) => {
  return (
    <div className='landscape-profile-container'>
      <div className={`gye-image-container landscape ${animateClass}`}>
        <div className='landscape-gye-image'></div>
      </div>
      <div className={`gye-profile-container landscape ${animateClass}`}>
        <div className='gye-profile'>
          <div className='gye-profile-title'>
            <h1>계춘회</h1>
          </div>
          <div
            className='landscape-modal-close-btn'
            onClick={() => handleModalClose()}
          >
            <FontAwesomeIcon icon={faClose} />
          </div>
          <div className='gye-profile-description'>
            <p>{INTRODUCE_TEXT}</p>
          </div>
          <div className='gye-profile-bio'>
            <div className='profile-item profile-item-01 birth-wrapper'>
              <div className='cat-box birth-title'>
                {Description.BirthTitle}
              </div>
              <div className='profile-content birth-content'>
                {Description.Birth}
              </div>
            </div>
            <div className='profile-item profile-item-02 height-wrapper'>
              <div className='cat-box height-title'>
                {Description.HeightTitle}
              </div>
              <div className='profile-content height-content'>
                {Description.Height}
              </div>
            </div>
            <div className='profile-item profile-item-03 age-wrapper'>
              <div className='cat-box age-title'>{Description.AgeTitle}</div>
              <div className='profile-content age-content'>
                {Description.Age}
              </div>
            </div>
            <div className='profile-item profile-item-04 fanname-wrapper'>
              <div className='cat-box fanname-title'>
                {Description.FannameTitle}
              </div>
              <div className='profile-content fanname-content'>
                {Description.Fanname}
                <figure className='fanname-image profile-chunsik-character'>
                  <img src={chunsik} alt='춘식이'></img>
                </figure>
              </div>
            </div>
            <div className='profile-item profile-item-05 manufacturer-wrapper'>
              <div className='cat-box manufacturer-title'>
                {Description.MamaTitle}
              </div>
              <div className='profile-content manufacturer-content'>
                {Description.Mama}
              </div>
            </div>
            <div className='profile-item profile-item-06 assembly-wrapper'>
              <div className='cat-box assembly-title'>
                {Description.PapaTitle}
              </div>
              <div className='profile-content assembly-content'>
                {Description.Papa}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandscapeProfile;
