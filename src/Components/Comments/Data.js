import {List, Map} from "immutable";

const Data = Map({
        value: "",
        Adding:true,
        comments: List([
            Map({ value: "", Adding:false, comment:"Comment1", comments: List([
                    Map({value: "", Adding:false, comment:"Comment1-1"}),
                    Map({value: "", Adding:false, comment:"Comment1-2"}),
                    Map({value: "", Adding:true, comment:"Comment1-3"})
                ])}),
            Map({value: "", Adding:false, comment:"Comment2"}),
            Map({value: "", Adding:false, comment:"Comment3"}),
            Map({value: "", Adding:false, comment:"Comment4", comments: List([
                    Map({value: "", Adding:false, comment:"Comment4-1"}),
                    Map({value: "", Adding:false, comment:"Comment4-2"}),
                    Map({value: "", Adding:false, comment:"Comment4-3", comments: List([
                            Map({value: "", Adding:false, comment:"Comment4-3-1"}),
                            Map({value: "", Adding:false, comment:"Comment4-3-2", comments:List([
                                    Map({value: "", Adding:false, comment:"Comment4-3-2-1"})
                                ])})

                        ])})
                ])}),
            Map({value: "", Adding: false, comment:"Comment5"}),
        ])
    });

export default Data;