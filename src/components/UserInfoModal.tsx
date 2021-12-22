import React, { useContext } from "react";
import { Modal } from './Modal';
import { UserContext } from '../context/UserContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import './UserInfoModal.scss';

interface UserInfoModalProps {
    open: boolean;
    onClose: () => void;
}

export const UserInfoModal = ({open, onClose}: UserInfoModalProps) => {
    const user = useContext(UserContext);

    return (
       <Modal open={open} onClose={onClose} title="User Info">
           <div className="UserInfoModal">
               <FontAwesomeIcon size="4x" icon={faUser} />
              <div className="userInfo">
                  User : {user.name} {user.surname}
              </div>
           </div>
       </Modal>
    )
}