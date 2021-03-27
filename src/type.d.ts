type IAppContext = {
    records: IRecord[]
    direction: AppDirection,
    setDirection:React.Dispatch<React.SetStateAction<AppDirection>>
}

type IRecord = {
    id: number
}

type AppDirection = "rtl" | "ltr"