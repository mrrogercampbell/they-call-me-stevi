import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FacebookIcon from '@material-ui/icons/Facebook';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 900,
        // maxHeight: 2000,
        backgroundColor: '#2A2527',
        color: 'white',
    },
    media: {
        height: 600,
        width: '80%',
        // objectFit: 'contain',
        paddingTop: '56.25%', // 16:9
    },
    // expand: {
    //     transform: 'rotate(0deg)',
    //     marginLeft: 'auto',
    //     transition: theme.transitions.create('transform', {
    //         duration: theme.transitions.duration.shortest,
    //     }),
    // },
    // expandOpen: {
    //     transform: 'rotate(180deg)',
    // },
    // avatar: {
    //     backgroundColor: red[500],
    // },
    subheader: {
        color: 'white'
    },
}));

export default function RecipeReviewCard(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.root}>
            <CardHeader
                className={classes.subheader}
                title={props.content.title}
            />
            <CardMedia
                className={classes.media}
                image={props.image}
                title="Paella dish"
            />
            <CardContent>
                <Typography variant="body4" color="white" component="p">
                    {props.content.description}
                </Typography>
            </CardContent>
        </Card>
    );
}
