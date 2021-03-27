type IAppContext = {
    records: IRecord[]
    direction: AppDirection,
    setLang:React.Dispatch<React.SetStateAction<Lang>>
    lang: Lang
}

type IRecord = {
    id: number
}


type Lang = {
    code: string
    direction: AppDirection
}

type AppDirection = "rtl" | "ltr"