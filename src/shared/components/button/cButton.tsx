import { Button } from 'antd';
import { iCButtonProps } from '../../interfaces/interfaces';

export const CButton: React.FC<iCButtonProps> = ({ texto, onClick }) => {
    return (
        <Button onClick={onClick}>
            {texto}
        </Button>
    );
};


