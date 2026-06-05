import style from './css/Page.module.css'

interface PageProps{
    children: React.ReactNode;
}

export default function Page({children}:PageProps){
    return(
        <div className={style.container}>
            {children}
        </div>
    );
}