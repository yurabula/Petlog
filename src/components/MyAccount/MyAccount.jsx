import React from 'react';
import './MyAccount.scss';
import go_back from "../../images/go_back.png";
import account_photo from "../../images/account_photo.png";
import edit_img from "../../images/edit_account.png"

const MyAccount = () => {
    return (
        <div className='my_account_container'>
            <div className='account_header'>
                <button className='button_account'>
                    <img className='go_back_img' src={go_back} alt='go back img' />
                    <span className='button_account_text'>Повернутись</span>
                </button>
                <h2 className='my_account_header'>МІЙ АКАУНТ</h2>
            </div>
            <div className='account_details'>
                <div>
                    <img className='account_photo' src={account_photo} alt='account photo' />
                </div>
                <div className='account_info'>
                    <p>Ім’я:</p>
                    <p>Прізвище:</p>
                    <p>Номер телефону:</p>
                    <p>Email:</p>
                    <p>Місце знаходження:</p>
                    <p>Розмірність:</p>
                    <p>Кількість собак:</p>
                    <div>
                        <button className='button_edit_account'>
                            <span className='button_edit_text'>Редагувати</span>
                            <img className='edit_img' src={edit_img} alt='edit button' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyAccount;
