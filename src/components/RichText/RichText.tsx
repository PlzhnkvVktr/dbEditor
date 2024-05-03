import { height } from '@mui/system'
import JoditEditor from 'jodit-react'
import React, { useRef } from 'react'

type Props = {
    value: [string, React.Dispatch<React.SetStateAction<string>>]
}

export const RichText: React.FC<Props> = ({value}) => {

    const editor = useRef(null)
    const config = {
        language: 'ru',
        toolbarAdaptive: false,
    }

    return (
        <JoditEditor
            className="jodit-editor"
            ref={editor}
            config={config}
            value={value[0]}
            onBlur={(newContent) => value[1](newContent)}
        />
    )
}