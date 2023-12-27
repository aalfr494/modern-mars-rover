import _ from "lodash";
import { useEffect } from "react";

interface Rover {
  photos: {
    camera: string;
    earth_date: string;
    id: number;
    img_src: string;
    rover: string[];
    sol: number;
  }[];
}

interface Props {
  roverData: Rover[];
}

export const RoverList = ({ roverData }: Props) => {
  useEffect(() => {
    console.log("sub component data", roverData);
  }, [roverData]);

  let mappedPhotos =
  _.head(roverData?.photos?.map((rover: any) => (
        <tr>
          <td>{rover.rover.name}</td>
          <td>{rover.earth_date}</td>
          <td>
            <img
              src={rover.img_src}
              style={{ height: "100px", width: "200px" }}
            />
          </td>
        </tr>
  )))

  return (
    <>
      <h3>Rover List</h3>

      {roverData && (
        <table>
          <thead>
            <tr>
              <th>Rover Name</th>
              <th>Date</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>{mappedPhotos}</tbody>
        </table>
      )}
    </>
  );
};
