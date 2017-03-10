import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import FormsComponent from '../../ToolBox/Components/AllComponents/FormsComponent';
import FormColComponent from '../../ToolBox/Components/AllComponents/FormColComponent';
import FormRowComponent from '../../ToolBox/Components/AllComponents/FormRowComponent';
import TextFieldComponent from '../../ToolBox/Components/AllComponents/TextFieldComponent';
import TextAreaComponent from '../../ToolBox/Components/AllComponents/TextAreaComponent';
import EmailFieldComponent from '../../ToolBox/Components/AllComponents/EmailFieldComponent';
import DropDownComponent from '../../ToolBox/Components/AllComponents/DropDownComponent';
import FileSelectorComponent from '../../ToolBox/Components/AllComponents/FileSelectorComponent';
import RadioButtonsComponent from '../../ToolBox/Components/AllComponents/RadioButtonsComponent';
import CheckboxComponent from '../../ToolBox/Components/AllComponents/CheckboxComponent';
import SubmitButtonsComponent from '../../ToolBox/Components/AllComponents/SubmitButtonsComponent';
import {CaptureFormValuesChanged} from '../Actions/CaptureFormValuesChanged';
import {SubmitCreateIdeaForm} from '../Actions/SubmitCreateIdeaForm';


class IdeaCaptureComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <div id="FormAncestor">
                    <FormsComponent>
                        <FormRowComponent Wrap="wrap">
                            <FormColComponent>
                                <EmailFieldComponent
                                    DefaultBorderColor="lightgrey"
                                    FocusBorderColor="#004d40"
                                    WarningBorderColor="red"
                                    MaxLength={100}
                                    LabelText="E-mail"
                                    InputFieldIdentifier="EmailInput"
                                    OnChangeCallBackFunction={(value)=> {
                                        this.props.FieldsChanged('email', value, 'EMAIL_VALUE_CHANGED');
                                    }}
                                    CurrentFieldValueState={this.props.email}
                                    Icon="fa fa-envelope-o"
                                    Width="290px"
                                />
                            </FormColComponent>
                            <FormColComponent>
                                <TextFieldComponent
                                    DefaultBorderColor="lightgrey"
                                    FocusBorderColor="#004d40"
                                    WarningBorderColor="red"
                                    MaxLength={50}
                                    LabelText="Title"
                                    InputFieldIdentifier="IdeaTitle"
                                    OnChangeCallBackFunction={(value) => {
                                        this.props.FieldsChanged('title', value, 'TITLE_VALUE_CHANGED');
                                    }}
                                    CurrentFieldValueState={this.props.title}
                                    Icon='fa fa-edit'
                                    Width='290px'
                                />
                            </FormColComponent>
                            <FormColComponent>
                                <DropDownComponent
                                    LabelText="Category"
                                    InputFieldIdentifier="IdeaCategory"
                                    OnChangeCallBackFunction={(value)=> {
                                        this.props.FieldsChanged('category', value, 'CATEGORY_VALUE_CHANGED');
                                    }}
                                    CurrentFieldValueState={this.props.category}
                                    ListItems={[
                                        'Incremental',
                                        'Disruptive',
                                        'Radical'
                                    ]}
                                    Icon="fa fa-list-alt"
                                    Width="290px"
                                />
                            </FormColComponent>
                        </FormRowComponent>
                        <FormRowComponent>
                            <FormColComponent>
                                <TextAreaComponent
                                    DefaultBorderColor="lightgrey"
                                    FocusBorderColor="#004d40"
                                    WarningBorderColor="red"
                                    MaxLength={1000}
                                    LabelText="Description"
                                    InputFieldIdentifier="IdeaDescription"
                                    OnChangeCallBackFunction={(value) => {
                                        this.props.FieldsChanged('description', value, 'DESCRIPTION_VALUE_CHANGED');
                                    }}
                                    CurrentFieldValueState={this.props.description}
                                    Icon='fa fa-info-circle'
                                    Width='100%'
                                    Height="100px"
                                />
                            </FormColComponent>
                        </FormRowComponent>
                        <FormRowComponent Wrap="wrap">
                            <FormColComponent>
                                <RadioButtonsComponent
                                    LabelText="Privacy"
                                    InputFieldIdentifier="PrivacyRadios"
                                    OnChangeCallBackFunction={(value)=> {
                                        this.props.FieldsChanged('privacy', value, 'PRIVACY_VALUE_CHANGED');
                                    }}
                                    CurrentFieldValueState={this.props.privacy}
                                    RadioButtonsList={[
                                        'Private',
                                        'Public'
                                    ]}

                                />
                            </FormColComponent>
                            <FormColComponent>
                                <FileSelectorComponent
                                    LabelText="Please select an image"
                                    InputFieldIdentifier="IdeaImage"
                                    OnChangeCallBackFunction={(base64)=> {
                                        this.props.FieldsChanged('base64', base64, 'BASE64_VALUE_CHANGED');
                                    }}
                                    Icon="fa fa-file-picture-o"
                                />
                            </FormColComponent>
                            <FormColComponent>
                                <CheckboxComponent
                                    LabelText="Accept our terms and conditions"
                                    OnChangeCallBackFunction={(AllCheckedBoxesIDS)=> {
                                        this.props.FieldsChanged('TermsAndConditions', AllCheckedBoxesIDS, 'TERMS_CHECKED_CHANGED');
                                    }}
                                    CheckedIDs={this.props.TermsAndConditions}
                                    CheckBoxList={
                                        [
                                            {
                                                CheckBoxID: 'AcceptTerms',
                                                CheckBoxValue: 'I accept'
                                            }
                                        ]
                                    }
                                />
                            </FormColComponent>
                        </FormRowComponent>
                        <FormRowComponent>
                            <FormColComponent>
                                <SubmitButtonsComponent CallBack={()=> {
                                    this.props.SubmitForm(this.props)
                                }}>
                                    Submit
                                </SubmitButtonsComponent>
                            </FormColComponent>
                        </FormRowComponent>
                    </FormsComponent>
                </div>
                <div id="APIresultAncestor">

                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        email: state.CaptureFormReducer.email,
        title: state.CaptureFormReducer.title,
        category: state.CaptureFormReducer.category,
        description: state.CaptureFormReducer.description,
        privacy: state.CaptureFormReducer.privacy,
        TermsAndConditions: state.CaptureFormReducer.TermsAndConditions,
        base64: state.CaptureFormReducer.base64
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        FieldsChanged: CaptureFormValuesChanged,
        SubmitForm: SubmitCreateIdeaForm
    }, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(IdeaCaptureComponent);



