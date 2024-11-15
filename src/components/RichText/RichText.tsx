import { height } from '@mui/system'
import JoditEditor from 'jodit-react'
import { placeholder } from 'jodit/esm/plugins/placeholder/placeholder'
import React, { useEffect, useMemo, useRef } from 'react'
import { cursorTo } from 'readline'

type Props = {
    value: [string, React.Dispatch<React.SetStateAction<string>>]
}

export const RichText: React.FC<Props> = ({value}) => {

    const editor = useRef(null)
    // const config = {
    //     language: 'ru',
    //     toolbarAdaptive: false,
    //     placeholder: ""
    // }

    const config = useMemo(() => ({
        readonly: false, // all options from https://xdsoft.net/jodit/docs/,
        
        language: 'ru',
        toolbarAdaptive: false,
        placeholder: ""
    }),
    [placeholder]
);


    return (
        <JoditEditor
            className="jodit-editor"
            ref={editor}
            config={config}
            value={value[0]}
            onChange={(newContent) => value[1](newContent) }
        />
    )
}