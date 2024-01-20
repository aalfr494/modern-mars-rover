import _ from "lodash";
import { useEffect } from "react";
import { MarsRoverPhotosResponse, Photo } from "./SearchBar";

// interface Rover {
//   photos: {
//     camera: string;
//     earth_date: string;
//     id: number;
//     img_src: string;
//     rover: string[];
//     sol: number;
//   }[];
// }

interface Props {
  roverData: MarsRoverPhotosResponse;
}

export const RoverList = ({ roverData }: Props) => {
  useEffect(() => {
    console.log("sub component data", roverData);
    //console.log("testing path", roverData?.photos[0]?.earth_date);
  }, [roverData]);

  // const mappedPhotos = _.head(
  //   roverData?.photos?.map((singleRover: Photo[]) => (
  //     <tr>
  //       <td>{singleRover.rover.name}</td>
  //       <td>{singleRover.earth_date}</td>
  //       <td>
  //         <img
  //           src={singleRover.img_src}
  //           style={{ height: "100px", width: "200px" }}
  //         />
  //       </td>
  //     </tr>
  //   ))
  // );

  // const mappedPhotos = _.head(
  //   roverData?.photos?.map((singleRover: Photo): React.ReactNode => {
  //     return (
  //       <tr>
  //         <td>{singleRover.rover.name}</td>
  //         <td>{singleRover.earth_date}</td>
  //         <td>
  //           <img
  //             src={singleRover.img_src}
  //             style={{ height: "100px", width: "200px" }}
  //           />
  //         </td>
  //       </tr>
  //     );
  //   })
  // );

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
          <tbody>
            {_.head(
              roverData?.photos?.map((singleRover: Photo): React.ReactNode => {
                return (
                  <tr>
                    <td>{singleRover.rover.name}</td>
                    <td>{singleRover.earth_date}</td>
                    <td>
                      <img
                        src={singleRover.img_src}
                        style={{ height: "100px", width: "200px" }}
                      />
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      )}
    </>
  );
};
