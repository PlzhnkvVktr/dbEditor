import { height } from '@mui/system'
import JoditEditor from 'jodit-react'
import { placeholder } from 'jodit/esm/plugins/placeholder/placeholder'
import React, { useEffect, useRef } from 'react'
import { cursorTo } from 'readline'

type Props = {
    value: [string, React.Dispatch<React.SetStateAction<string>>]
}

export const RichText: React.FC<Props> = ({value}) => {

    const editor = useRef(null)
    const config = {
        language: 'ru',
        toolbarAdaptive: false,
        placeholder: ""
    }

    return (
        <JoditEditor
            className="jodit-editor"
            ref={editor}
            config={config}
            value={value[0]}
            onBlur={(newContent) => value[1](newContent) }
        />
    )
}