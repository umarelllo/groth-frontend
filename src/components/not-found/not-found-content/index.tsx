import { Button, Typography } from "@mui/material"
import { FC } from "react"
import { Link } from "react-router-dom"
import { INotFoundProps } from "./not-found-interface"

export const NotFoundContent: FC<INotFoundProps> = ({text, link}: INotFoundProps) => {
    return (
        <div>
            <Typography sx={{color: 'whitesmoke', fontWeight: '500'}} variant='h2'>404</Typography>
            <Typography sx={{color: 'whitesmoke', fontWeight: '500'}} variant='subtitle2'>{text}</Typography>
            <Link to='/'>Вернуться</Link>
        </div>
    )
}