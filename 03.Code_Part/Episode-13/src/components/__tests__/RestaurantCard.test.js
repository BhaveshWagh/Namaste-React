import { render, screen } from "@testing-library/react";
import RestaurantCard, {withPromotedLabel} from "../RestaurantCard";
import MOCK_DATA from "../mockData/resCardMock.json";
import "@testing-library/jest-dom"

describe('RestaurantCard', () => {
    it('renders with promoted label when wrapped with withPromotedLabel', () => {
      // Mock data for testing
      const mockResData = {
        cloudinaryImageId: 'mockImageId',
        name: 'Mock Restaurant',
        cuisines: ['Cuisine1', 'Cuisine2'],
        areaName: 'Mock Area',
        costForTwo: 50,
        sla: { slaString: '30 mins' },
        avgRating: 4.5,
      };
  
      // Create a component with PromotedLabel
      const RestaurantCardWithPromotedLabel = withPromotedLabel(RestaurantCard);
  
      // Render the component with mocked data
      const { getByText } = render(<RestaurantCardWithPromotedLabel resData={mockResData} />);
  
      // Assert that the Promoted label is rendered
      expect(getByText('Promoted')).toBeInTheDocument();
  
      // You can also add additional assertions for the underlying RestaurantCard component
      // For example, you might want to check if the RestaurantCard content is rendered
      expect(getByText('Mock Restaurant')).toBeInTheDocument();
      expect(getByText('Cuisines: Cuisine1, Cuisine2')).toBeInTheDocument();
      // Add more assertions as needed
    });
  });

it("Should render Restaurant card component with props Data", () => {
  // it takes a props as redData
  render(<RestaurantCard resData={MOCK_DATA} />);

  const name = screen.getByText("Bakingo");

  expect(name).toBeInTheDocument();
});


// it("Should render RestaurantCard component with Promoted Label", () => {
//     // Homeork - test HOC : withPromotedLabel()
//     render(<withPromotedLabel resData={MOCK_DATA} />);
  
//     const name = screen.getByText("Bakingo");
  
//     expect(name).toBeInTheDocument();
//   });
  
