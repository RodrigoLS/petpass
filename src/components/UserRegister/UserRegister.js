import React, { Component } from 'react'
import UserDetails from './UserDetails'
import AccountDetails from './AccountDetails'
import PetDetails from './PetDetails'
import UserLogin from '../UserLogin/UserLogin'
import logo from '../../assets/mypetpass.png'
import { Grid, Hidden } from '@material-ui/core'
import './page.scss'
import '../../reset.scss'

export class UserRegister extends Component {
    state = {
        step: 1,
        name: '',
        email: '',
        password: '',
        description: '',
        accountNumber: '',
        digit: '',
        agency: '',
        bankCode: '',
        birthday: '',
        lat: '',
        lng: '',
        phone: '',
        gender: '',
        photo: '',
        photoPreview: '',
    }

    nextStep = () => {
        const { step } = this.state
        this.setState({
            step: step + 1
        })
    }

    prevStep = () => {
        const { step } = this.state
        this.setState({
            step: step - 1
        })
    }

    handleChange = input => e => {
        this.setState({ [input]: e.target.value })
    }

    handleUpload = input => e => {
        if (input === 'photo') {
            const file = e.target.files[0]
            if (file !== undefined) {
                this.setState({
                    photoPreview: URL.createObjectURL(file),
                    photo: e.target.files[0]
                })
            }
        }
    }

    componentDidMount() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.setState({
                    lat: position.coords.latitude
                })
                this.setState({
                    lng: position.coords.longitude
                })
            })
        }
    }

    render() {
        const { step } = this.state
        const { name,
            email,
            password,
            description,
            accountNumber,
            digit,
            agency,
            bankCode,
            birthday,
            lat,
            lng,
            phone,
            gender,
            photo,
            photoPreview } = this.state

        const values = {
            name,
            email,
            password,
            description,
            accountNumber,
            digit,
            agency,
            bankCode,
            birthday,
            lat,
            lng,
            phone,
            gender,
            photo,
            photoPreview
        }

        switch (step) {

            case 1:
                return (
                    <Grid className='page'>
                        <Grid
                            item container xs={10}
                            className='box'>

                            <Hidden xsDown>
                                <Grid
                                    item container sm={6}
                                    justify='center' alignItems='center'>
                                    <img src={logo} alt='logo' />
                                </Grid>
                            </Hidden>

                            <Grid
                                item container xs={12} sm={6}
                                justify='center' alignItems='center'
                                className='form'>
                                <UserDetails
                                    nextStep={this.nextStep}
                                    prevStep={this.prevStep}
                                    handleChange={this.handleChange}
                                    handleUpload={this.handleUpload}
                                    values={values} />
                            </Grid>
                        </Grid>
                    </Grid>
                )
            case 2:
                return (
                    <Grid className='page'>
                        <Grid
                            item container xs={10}
                            className='box'>
                            <Hidden xsDown>
                                <Grid
                                    item container sm={6}
                                    justify='center' alignItems='center'>
                                    <img src={logo} alt='logo' />
                                </Grid>
                            </Hidden>

                            <Grid
                                item container xs={12} sm={6}
                                justify='center' alignItems='center'
                                className='form'>
                                <AccountDetails
                                    nextStep={this.nextStep}
                                    prevStep={this.prevStep}
                                    handleChange={this.handleChange}
                                    values={values} />
                            </Grid>
                        </Grid>
                    </Grid>
                )
            case 3:
                return (
                    <Grid className='page'>
                        <Grid
                            item container xs={10}
                            className='box'>
                            <Hidden xsDown>
                                <Grid
                                    item container sm={6}
                                    justify='center' alignItems='center'>
                                    <img src={logo} alt='logo' />
                                </Grid>
                            </Hidden>

                            <Grid
                                item container xs={12} sm={6}
                                justify='center' alignItems='center'
                                className='form'>
                                <PetDetails
                                    nextStep={this.nextStep}
                                    prevStep={this.prevStep}
                                    handleChange={this.handleChange}
                                    values={values} />
                            </Grid>
                        </Grid>
                    </Grid>
                )
            case 4:
                return (
                    <UserLogin msg="Obrigado por se cadastrar no petpass!" />
                )
            default:
                return ''
        }
    }
}

export default UserRegister
