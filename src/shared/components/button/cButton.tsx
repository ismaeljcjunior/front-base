import { Button } from 'antd';
import { ICButtonProps } from '../../interfaces/interfaces';

export const CButton: React.FC<ICButtonProps> = ({ texto, onClick }) => {
    return (
        <Button onClick={onClick}>
            {texto}
        </Button>
    );
};


