import { Typography, Accordion, AccordionDetails, AccordionSummary, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react';
import { User } from '../../../models/User';
import styles from "./UserItem.module.css"
import { useNavigate } from 'react-router-dom';

interface Props {
    user: User
}

const UserItem: React.FC<Props> = ({ user }) => {

    const navigate = useNavigate()

    return (
        <Accordion className={styles.accordion}>
            <AccordionSummary
                className={styles.summary}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography>{user.id}. {user.username}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Id: {user.id} <br />
                    Имя пользователя: {user.username} <br />
                    Имя: {user.first_name ? user.first_name : "Не задано"} <br />
                    Фамилия: {user.last_name ? user.last_name : "Не задано"} <br />
                    Последний вход: {user.last_login ? user.last_login : "Неизвестно"} <br />
                    Активен: {user.is_active ? "Да" : "Нет"}  <br />
                    Админ: {user.is_superuser ? "Да" : "Нет"} <br />
                    <Button
                        onClick={() => navigate(`/users/${user.id}`)}
                        className={styles.editBtn}
                        type="submit"
                        variant="contained"
                        color="warning"
                    >
                        Редактировать
                    </Button>
                </Typography>
            </AccordionDetails>
        </Accordion>
    );
};

export default UserItem;
