import React from 'react';
import './Header.css';
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StoreMallDirectoryIcon from '@material-ui/icons/StoreMallDirectory';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import { Avatar, IconButton } from "@material-ui/core";
import ForumRoundedIcon from '@material-ui/icons/ForumRounded';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import { useStateValue } from './StateProvider';
// import { auth, provider } from './firebase';
// import { useHistoty } from 'react-router-dom';


function Header() {
    // const history = useHistoty();

    // const signOut = () => {
    //     auth.signOut(auth => {
    //         history.push('/login')
    //     })
    // }
    const [{ user },dispatch ] = useStateValue();
    return (
        <div className="header">
            <div className="header__left">
                 <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEX///8AAAD5
                           +fkeHh5kZGS0tLTz8/M2Njbf398iIiJcXFz8/Pzq6urMzMzW1tZHR0empqaUlJROTk56enpCQkL19fWur
                           q5XV1ecnJxtbW1mZma+vr6fn587OzspKSmKiooYGBgMDAx1dXXl5eUuLi6Dg4PFxcUSEhIjFh4MAAAGgklEQVR4nO2d63aqPBCGBfFQBcXzsa3YfvX+7/Cr21p3tyBk5p0J1Xn+di3wKZBMMpOk0TAMwzAMwzAMwzAMwzAMwzAMHP3uZp6O9tFiPH2ejhfRfpTON92+75+FIIyT5WQaFDGdLJM49P0jyYSDdNUplLvQWaWDX2gZt3q7CnZnmlEr9v2TXXhbvjjYnXlZvvn+4dWIt0OC3onhtv5PMonIeieixLfCTdInpt+Rl9S3RhHxCKB3YlTHlzV+hfkdeW37FvqHEPf8zoxq1UfO4X5H5r
                           61vkmeRQSD4Lke7epsL+R3ZDLzrddobAT9Psk2nv3a3A6+nMjrY/w4iAsGwc7j14jtAot59eTXpkfYroy9vKkDNb8jA33BlqpgELS0BfFRWhkjXcG1umAQrBT9+j0PgkHQU5t+DBdeBINgoaTYL57/lGaqohj6E9RR7Pt6RU8ovKh+GpkLPWlBH93ET4Q7Df2O/hrRrl87VMtHMIDTDbaLEQvD277NvpEaTOmNB8sYywhqjeirIDLq//Bt9QOBuZu2xqRTdXb4T1F+2tCNCC0In/jdHQ6HLGNcADxVPEOJBdl6nuRkzt7cL4R9T1G5iVVRC9F1v9YEKZhg/PbFqV2CIbQ9haTPDreCLYrhFCcISYDenkeiGOJSqCFCcH37HiTDAJUIRwwKhyWzDzRD0FAxBghmZaUVNMPSy1YDEXGXds80Q0wEjniEw9K7EA0DRGkR4issH5RTDRFfIkCwQsdFNQz4ginAsEK/RTbkl/khqg0rfCxkwxeuICIirTKrQjZkR6eIge9/ooYlwVIZiK6i0ljVfXz4Da/D2CIMC/qKj33vwph+eV5bA5kizS/Bh+V4WJOnjHfnwiE3eET0Ql9wXtMl4gc0c8c4wJrULcOQsjDkinxDxJW/eKcLQlpSecOAPobCpAvlDekJRUzOXt6QPP8duqw+K0besEkt0AClfOUNyUlhUJelYEidVlxhbq9gSKxACassca2AgmGHNnGK6Q1VDImBGygdExwUDGnDYF5QmkXr6MQqty1fRH+zjjLW3Wih6YR1zye3T4NZq0PLJfLqSJ/cgkXmOK18yjkP3j0dDZnRRUYR7KsacishKHEbffaLYsgda3cJhsz/qqMhN8FFqT1hprYdDXkNNy0yZcbdjobc+njKlCIzq+Zo+M40XBIMmUVCbobMhpvW5TMzFsqGlOwF88twM2RPPVOWYTAyCe6G7PJcytQ+c3mTmyF73pISmDKn3d0M2TkuSo2b6jNk1+xQniH3O3QaH7JTzZTvkNmW7uatM7lx/+XPn2zYKSBKW4orXVeYpyH1h7BNWTTm2kgxDWwhnoohJS6FpaFVDCljC9jeTyqGlPEhbA2JiiFljM+cp7mgYkiZp2EPaM6oGJJypKibaxiS5ku5gek3Goa0OW/u9NcZDUNa3gJSEBXoGNJyT6j8oYYhLX94/zng+8/j338txgPU09x/TVTYhNy+xnVtoIkMeUP6goT7ry+9/xrh+6/zlqzVR1z5C06tPmS9hbgha1kQYs2MtCFvwyHEuidpQ966J0RrKm3IXOwM6PSFDZnrDxHDYGFD9g4n/C5R1pC9DhgwhJI1BOxvwv4NsoZ8QX6WTdSQklX7F3aHIWoI2dyEWychaYjZXZC75aWgIWh/Gu6XKGiI2o6WuU+UoCFsY2hewlvOEHhcEqvGTcwQuF8bLzoVM4TuYcopH5IyhO6b2JhltTME733JqT0RMoQfdUUfCssYcge+18zIi/NFDJsCW3qT21MRQ5FzvKgRuISh0OkBxLrop9yLsQSF9mQnb5fcyYEVJaE7igt3fzbCA5xv8QBnlMAqUBiIH07m+6wg+H76V3g+70nj7DWPh5JpHUvmUZFWKEtQvPez87ydfxipCTb8dBqaZ1g2HuAc0gc4S/YBzgP+HEwx19E64OdM54beKV7qn+CFBLN35G2aHs9W/3xT5Q+6Wvt6Q89sMlG/DD7x684MtT4qj4nvB3gikQrFp16/wB/A1gz/AJgA5ROOMrBeNtKMs6vQxnaOr6AqCygxLhpf1tHvDymiuP+lVt/fFQn3yIN1fdrPIuKUHpGPU8T5TQrEW8oGc+/bX6J3ot2KXFa+Ndet2jYuxfQH81WVhbad1XxQt76vOmGcbCfDrMAtG062SYw6xNAr/e5mni4n6954OB2Oe+vJMp1vur/3wRmGYRiGYRiGYRiGYRiGYRh15H
                           /efYDfRcLSIgAAAABJRU5ErkJggg==" alt=""  />
                <div className="header__input">
                <SearchIcon />
                 <input placeholder="Search Facebook" type="text" />
                 </div> 
            </div>
            <div className="header__middle">
             <div className="header__option header__option--active">
                 <HomeIcon fontSize="large" />
             </div>
             <div className="header__option">
                 <FlagIcon fontSize="large" />
             </div>
             <div className="header__option">
                 <SubscriptionsIcon fontSize="large" />
             </div>
             <div className="header__option">
                 <StoreMallDirectoryIcon fontSize="large" />
             </div>
             <div className="header__option">
                 <SupervisorAccountIcon fontSize="large" />
             </div>
            </div>
            <div className="header__right">
                  <div className="header__info">
                      <Avatar src={user.photoURL} />
                     <h4>{user.displayName}</h4>
                  </div>
                  <IconButton>
                      <AddIcon />
                  </IconButton>
                  <IconButton>
                      <ForumRoundedIcon />
                  </IconButton>
                  <IconButton>
                      <NotificationsIcon />
                  </IconButton>
                  <IconButton>
                      <ExpandMoreIcon />
                  </IconButton>
            </div>
            
        </div>
    )
}

export default Header
