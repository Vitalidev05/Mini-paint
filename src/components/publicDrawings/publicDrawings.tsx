import {
  CardMedia,
  Card,
  CardActionArea,
  CardHeader,
  Divider,
  Menu,
  MenuItem,
  Button,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';

import { useActions } from '../../hooks/useActions';
import { useStates } from '../../hooks/useStates';

import style from './publicDrawings.scss';

const PublicDrawings = (): JSX.Element => {
  const [DrawingAuthor, setDrawingAuthor] = useState('');
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { setPublicDrawingsAction } = useActions();
  const { publicDraws } = useStates(x => x.publicState);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (author: string) => {
    setAnchorEl(null);
    setDrawingAuthor(author);
  };

  useEffect(() => {
    setPublicDrawingsAction();
  }, []);

  return (
    <div className={style.container}>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        variant="outlined"
      >
        Filter by Author
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {publicDraws.map(x => (
          <MenuItem key={x.author} onClick={() => handleClose(x.author)}>
            {x.author}
          </MenuItem>
        ))}
        <MenuItem onClick={() => handleClose('')}>all</MenuItem>
      </Menu>
      <div className={style.publicContainer}>
        {publicDraws
          .filter(x => (DrawingAuthor === '' ? x.author : x.author === DrawingAuthor))
          .map(x => (
            <div key={x.author} className={style.authorContainer}>
              <h3 className={style.suptitle}>
                Draws by
                {x.author}
              </h3>
              <Divider />
              <div className={style.cardContainer}>
                {x.drawings.map(data => (
                  <Card key={data.paintId} className={style.card} variant="outlined">
                    <CardHeader subheader={data.paintName} />
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        alt={data.paintName}
                        image={data.paintUrl}
                        className={style.cardImg}
                      />
                    </CardActionArea>
                  </Card>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PublicDrawings;
